<template>
    <h1>Menu</h1>

    <k-button large rounded @click="logout">
        LogOut
    </k-button>
</template>

<script setup>

    import { kButton } from 'konsta/vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/')
    }

</script>