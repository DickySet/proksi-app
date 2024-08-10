<template>
    <k-toast position="left" :opened="error">
        <template #button>
            <k-button clear inline @click="() => (error = null)">
                Close
            </k-button>
        </template>
        <div class="shrink">{{ error }}</div>
    </k-toast>
    <div class="flex h-screen justify-center items-center">
        <k-card>
            <k-list inset-ios>
                <img src="../../assets/image/logo.png" :style="{ maxWidth: '50%' }" class="mx-auto">

                <k-list-input @input="e => email = e.target.value.toLowerCase()" outline label="Username" floating-label
                type="text" placeholder="Username" :value="email" />

                <k-list-input @input="e => password = e.target.value" outline label="Password" floating-label type="password"
                placeholder="Password" />

                <k-block>
                    <k-button large rounded @click="login">
                        Login
                    </k-button>
                </k-block>

                <div class="flex justify-center items-center">
                    <router-link :to="{ name: 'register.index' }" class="text-gray-500">
                        Anda tidak punya akun? <span class="text-blue-400 font-semibold">Silakan mendaftar</span>
                    </router-link>
                </div>
            </k-list>
        </k-card>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import { kCard, kBlock, kList, kButton, kListInput, kToast } from 'konsta/vue';
    import { useRouter } from 'vue-router';
    import { setToken, setUser } from '../../services/storage.js'
    import { apiLogin } from '../../services/auth.js';

    import api from '../../api'

    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = async () => {
        try {
            const response = await api.post('/api/login', {
                username: email.value,
                password: password.value,
                device_name: "test"
            });

            console.log(response);
            if (response.status === 200) {
                const token = response.data.data.access_token; // Ambil token dari respons dengan benar
                setToken(token); // Simpan token di localStorage
                setUser(response.data.data);

                router.push('/menu');
            } 
        } catch (err) {
            // Handle login error
            err.value = 'Invalid email or password. Please try again.';
        }
    };

</script>