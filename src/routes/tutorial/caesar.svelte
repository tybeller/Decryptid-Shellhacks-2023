<script>
    function caesarCipher(input, offset){
        offset = offset % 26 || 0;
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const shiftedAlphabet = alphabet.slice(offset) + alphabet.slice(0, offset);
        
        return input
            .split('')
            .map(char => {
            const index = alphabet.indexOf(char);
            if (index !== -1) {
                return shiftedAlphabet[index];
            }
            return char;
            })
            .join('');
    }

    let caesarInput = 'WRITE YOUR CYPHER HERE';

    $: caesarInput = caesarInput.toUpperCase();
    
    let cypherOffset = 5;

    $: caesarOutput = caesarCipher(caesarInput, cypherOffset);

    import { getToastStore } from "@skeletonlabs/skeleton";
    const toastStore = getToastStore();

    const winToast = {
        message: 'You got it!',
    }

    const loseToast = {
        message: 'Nope, try again!'
    }

    let inputcaesar = '';

    function buttonTest() {
    if (inputcaesar === 'SHELLHACKS') {
        toastStore.trigger(winToast);
        }
    else {
            toastStore.trigger(loseToast);
        }
    }

    // function buttonTest() {
    //     let input = document.getElementById("inputcaesar");
    //     if (input === 'SHELLHACKS') {
    //         toastStore.trigger(winToast);
    //     }
    //     else {
    //         toastStore.trigger(loseToast);
    //     }
    // }

</script>

<!-- tailwind grid with -->
<div class="grid m-5">
    <h1 class="h1 m-5">Caesar Cipher</h1>
    <hr />
    <p class="p mx-5 my-2 text-lg">Long ago, the Roman emperor Julius Caesar wrote letters with sensitive information to friends and foes alike.</p>

    <p class="p mx-5 my-2 text-lg">To hide it from prying eyes, he replaced every letter in a given word with another letter several positions down the alphabet.</p>
        
    <p class="p mx-5 my-2 text-lg">This is known as a <b>mono-alphabetic substitution cipher</b>, or simply a <b>shift</b>.</p>

    <section class="card w-half mx-40 my-5 p-5">
        <div class="grid grid-cols-3 grid-row-3 h-60 w-160">
            <div class="w-50% mr-4 col-span-2 row-span-2 m-3">
                <textarea class="textarea uppercase w-full px-3 py-2.5 rounded boarder text-2xl" bind:value={caesarInput} type="text" placeholder="Input"></textarea>
            </div> 
            
            <div class="grid grid-cols-4 grid-rows-2 col-span-1 row-span-2">
                <input class="input w-1/2 px-2.5 rounded col-span-3 row-span-2 m-2 h-1em align-right text-5xl" bind:value={cypherOffset} type="number" placeholder="Offset" />
                <button on:click={() => cypherOffset+=1} class="btn-icon variant-filled-surface px-4 py-2 m-2 align-left">+</button>
                <button on:click={() => cypherOffset-=1} class="btn-icon variant-filled-surface px-4 py-2 m-2 align-left">-</button>
            </div>

            <div class="col-span-3 m-3">
                <textarea class="textarea w-full px-3 py-2.5 rounded border col-span text-3xl">{caesarOutput}</textarea>
            </div>
        </div>
    </section>

    <p class="p m-5 text-xl">It’s time for a little reverse engineering. Use the caesarian cypher tool above to decrypt the word <b>VKHOOKDFNV</b> and enter your result below.</p>

    <div class="flex justify-center">
        <input type="text" bind:value={inputcaesar} class="input mx-2 my-5 w-60 px-2.5 py-2.5 rounded border text-2xl" placeholder="Answer" />
        <button type="button" on:click={buttonTest} class="btn mx-2 my-5 btn-lg variant-filled">Try</button>
    </div>
</div>