<script>
    let isPlucked = [false, false, false, false, false, false];
    let pluckedString = -1;
  
    function pluckString(index) {
      isPlucked[index] = true;
      pluckedString = index;
  
      // Reset the string after the animation completes (1s)
      setTimeout(() => {
        isPlucked[index] = false;
        pluckedString = -1;
      }, 1000);
    }
  </script>
  
  <div class="guitar-container">
    {#each Array(6) as _, index (index)}
      <div
        class="guitar-string"
        class:plucked={index === pluckedString}
        on:click={() => pluckString(index)}
      ></div>
    {/each}
  </div>
  
  <style>
    .guitar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 200px;
    }
  
    .guitar-string {
      width: 2px;
      height: 150px;
      background-color: #333;
      transition: transform 1s ease-in-out;
      transform-origin: center bottom;
      margin: 0 10px; /* Adjust the margin to control spacing between strings */
    }
  
    /* CSS for the plucking animation */
    .plucked {
      animation: wiggle 1s infinite ease-in-out;
    }
  
    @keyframes wiggle {
      0%, 100% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-5px);
      }
      50% {
        transform: translateX(5px);
      }
      75% {
        transform: translateX(-5px);
      }
    }
  </style>
  

<!-- 	
    
idea

do teaching challenge, create basic guitar course with animated string effects where the user can see
the string being plucked and hear the corresponding note being played


} -->