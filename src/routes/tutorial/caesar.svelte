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

</script>

<!-- tailwind grid with -->
<div class="grid">
    <h1 class="h1">Caesar Cypher</h1>

    <section class="card w-half m-10 p-5">
        <div class="grid grid-cols-3 grid-row-3">
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

</div>