<script>
    function caesarCipher(input, offset){
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

    <div class="grid grid-flow-col gap-3">
        <div class="w-50% mr-4 col-span-1">
            <textarea class="textarea uppercase w-full px-3 py-2.5 rounded boarder" bind:value={caesarInput} type="text" placeholder="Input"></textarea>
        </div> 
        
        <div class="flex items-center w-50% mr-4 col-span-1">
            <input class="input w-1/2 px-2.5 rounded" bind:value={cypherOffset} type="number" placeholder="Offset" />
            <button class="btn-icon variant-filled-surface px-4 py-2">+</button>
            <button class="btn-icon variant-filled-surface px-4 py-2">-</button>
        </div>

        <div class="w-100%">
            <textarea class="textarea w-full px-3 py-2.5 rounded border col-span-2">{caesarOutput}</textarea>
        </div>
    </div>


</div>