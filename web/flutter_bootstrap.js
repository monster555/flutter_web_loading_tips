    /**
    * This function creates a delay of 500 milliseconds.
    *
    * @returns {Promise} A Promise that resolves after the delay.
    */
    function addDelay() {
        return new Promise((resolve) => setTimeout(resolve, 500));
    }

    // Get the progress and progressBar elements from the DOM
    const progress = document.getElementById("progress");
    const progressBar = document.getElementById("progressbar");

    // Initialize the width of the progress bar to 0%
    progress.style.width = `0%`;

    {{flutter_js}}

    progress.style.width = `33%`;

    {{flutter_build_config}}

    // Load the Flutter engine
    _flutter.loader.load({
        onEntrypointLoaded: async function(engineInitializer) {
            // Update the progress bar to 66% after the engine is loaded
            progressBar.style.width = `66%`;

            // Initialize the Flutter engine.
            const appRunner = await engineInitializer.initializeEngine();
    
            // Set progress to 100% before adding a delay.
            progressBar.style.width = `100%`;
            
            // Add a delay before running the app to create a smooth crossfade effect.
            await addDelay();
            
            // Hide the progress bar by reducing its opacity.
            // This will create the fade out effect by animating the opacity.
            progress.style.opacity = 0;
    
            // Run the Flutter app.
            await appRunner.runApp();
    
            // Add a fade-in effect to the Flutter view element.
            document.querySelector("flutter-view").classList.add("fade-in");
        }
    });
