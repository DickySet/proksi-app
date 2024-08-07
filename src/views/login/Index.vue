<template>
    <k-card>
        <k-list inset-ios strong-ios>
            <img src="../../assets/gt-guard/logo-vertical.png" :style="{ maxWidth: '50%' }" class="mx-auto">

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
                <router-link :to="{ name: 'home' }" class="text-gray-500">
                    Anda tidak punya akun? <span class="text-blue-400 font-semibold">Silakan mendaftar</span>
                </router-link>
            </div>
        </k-list>
    </k-card>

    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>

    <k-card>
        <k-block strong outline-ios class="space-y-2">
            <div class="grid grid-cols-3 gap-x-4">
                <k-button>Button</k-button>
                <k-button class="k-color-brand-red"> Button </k-button>
                <k-button>Button</k-button>
            </div>
            <div class="grid grid-cols-3 gap-x-4">
                <k-button outline>Outline</k-button>
                <k-button class="k-color-brand-red" outline> Outline </k-button>
                <k-button outline>Outline</k-button>
            </div>
            <div class="grid grid-cols-3 gap-x-4">
                <k-button clear>Clear</k-button>
                <k-button class="k-color-brand-red" clear> Clear </k-button>
                <k-button clear>Clear</k-button>
            </div>
            <div class="grid grid-cols-3 gap-x-4">
                <k-button tonal>Tonal</k-button>
                <k-button class="k-color-brand-red" tonal> Tonal </k-button>
                <k-button tonal>Tonal</k-button>
            </div>
        </k-block>
    </k-card>

</template>

<script setup>

    import { ref } from 'vue';
    import { kCard, kBlock, kList, kButton, kListInput, kToast } from 'konsta/vue';
    import { useRouter } from 'vue-router';
    import { setToken, setUser } from '../../services/storage.js'

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

                console.log('sini');

                router.push('/menu');
            } else {
                console.log('sana');
            }
        } catch (err) {
            // Handle login error
            err.value = 'Invalid email or password. Please try again.';
        }
    };

</script>