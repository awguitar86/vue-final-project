<template>
    <v-container class="d-flex flex-column align-center mt-5">
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAPknp725EyiVC2-79aDDX5sPNRAPgJJcekuzkYsGIzR7JNg/viewform?embedded=true" width="375" height="1000" frameborder="0" marginheight="0" marginwidth="0" id="form-sm">Loading…</iframe>

       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAPknp725EyiVC2-79aDDX5sPNRAPgJJcekuzkYsGIzR7JNg/viewform?embedded=true" width="640" height="1050" frameborder="0" marginheight="0" marginwidth="0" id="form-lg">Loading…</iframe>
    </v-container>
</template>

<style lang="scss" scoped>
    #form-lg {
        display: none;
    }

    @media only screen and (min-width: 40rem) {
        #form-lg {
            display: initial;
        }
        #form-sm {
            display: none;
        }
    }
</style>