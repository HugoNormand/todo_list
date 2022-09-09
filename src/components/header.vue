<template>
<head>
    <div class="block-title">
        <h1>Bienvenue sur ma Todo List !</h1>
    </div>
   <!--  <p class="explain-project">J'ai utilisé le store pour faire en sorte d'avoir la "fonctionnalité" comme si l'API faisait vraiment un get, update etc... Vous retrouverez dans le fichier "todoServices" les opérations CRUD, merci pour l'opportunité ! :)</p> -->
</head>
</template>

<script>

</script>

<style lang="scss">
@import '../assets/shared';    
    head {
        display:flex;
        width: 100%;
        background-color: $primary-color;
        border-bottom: solid 1px #fff;
        animation: border 1s;
    }

    .block-title {
        height: 100px;
        display: flex;
        font-family: $font;
        h1 {
            align-self: center;
            font-size: 40px;
            color: #fff;
            width: 100%;
            padding-left: 30px;
            overflow: hidden;
            white-space: nowrap;
            border-right: solid 2px #fff;
            @media (max-width: 800px) {
                font-size: 30px;
                transition: all 0.3s;
            };
            @media (max-width: 450px) {
                font-size: 20px;
                padding-left: 15px;
                transition: all 0.3s;
            };
            @media (max-width: 281px) {
                font-size: 18px;
                padding-left: 15px;
                transition: all 0.3s;
            };
            transition: all 0.3s;
            animation: 
            typing 2.5s steps(25, end),
            blink 0s step-end 4s infinite,
            stop-blink 1s step-end 3.1s infinite,
            border 3s
        }    
    }

    @keyframes typing {
    from { width: 0% }
    to { width: 100% }
    }

    @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: #fff }
    }

    @keyframes stop-blink {
    from { border-right: 2px }
    to { border-right: 0px;}
    }

    .explain-project {
        position: absolute;
        bottom: 145px;
        left: 80px;
        width: 250px;
        font-size: 20px;
        transform: rotate(-35deg);
        color: $tertiary-color;
        font-family: $font;
        z-index: 0;
    }

</style>