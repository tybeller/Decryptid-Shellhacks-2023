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

<div>
    <h1 class="h1">Caesar Cypher</h1>
    <label class="Label">
        <input class="input uppercase" bind:value={caesarInput} type="text" placeholder="Input" />
    </label> 
    
    <h1>{caesarOutput}</h1>


</div>