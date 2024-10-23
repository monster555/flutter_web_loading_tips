# Flutter Web Loading Tips

https://github.com/monster555/flutter_web_loading_tips/assets/32662133/83df94b8-fa19-4a89-a646-1ad55765a373

<a href="https://www.buymeacoffee.com/danicoy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Introduction

User experience is essential in the software development world, and the loading process is a crucial aspect often overlooked. A slow or clunky loading experience can frustrate users and cause them to abandon your app before it even has a chance to load your Flutter Web app.

## Key Features

- **Smooth Progress Bar**: Create an elegant progress bar that reflects the loading progress of your Flutter Web application.
- **Graceful Fading**: Implement a graceful fading effect for the progress bar upon loading completion.
- **Seamless Transition**: Ensure a seamless transition from the loading screen to displaying your Flutter content.

## Getting Started

To get started with improving your Flutter Web loading experience, follow these steps:

1. **Clone the Repository**: Begin by cloning this repository to your local development environment.

  ```shell
  git clone https://github.com/monster555/flutter_web_loading_tips.git
  ```

2. Enhance Your App: Apply the techniques learned from the guide to your Flutter Web project, and watch as your loading experience becomes smoother and more professional.

## See How Smooth the Loading Experience is on FaceFolio

This is one of my portfolio projects. To see the smooth loading experience in action, visit the [FaceFolio homepage](https://facefolio.dctech.dev).

## Step-by-Step

Improving the loading experience in your Flutter Web application involves just a few steps. Follow each step closely to ensure proper implementation. The provided code snippets should be integrated into your project as described.

### Step 1: Adding Progress Bar Elements in index.html

In your `index.html` file, add the following `<div>` elements to display the progress bar. These will visually represent the loading progress of the Flutter Engine.

```html
<!-- Create a progress bar container with a nested progress bar -->
<div class="progress-container" id="progress">
  <div class="progress-bar" id="progressbar"></div>
</div>
```

### Step 2: Adding the Script in `flutter_bootstrap.js`

To ensure the proper initialization of your Flutter app using the new method available in Flutter 3.22 and later, you need to update the `web/flutter_bootstrap.js` file (not the `build/web/flutter_bootstrap.js`, which is auto-generated during the build process and will be overwritten).

Below is an example of how your `web/flutter_bootstrap.js` file should look with the necessary changes in place:

```javascript
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
            
            // Add a delay bofreo running the app to create a smooth crossfade effect.
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
```

### Step 3: Creating `style.css`

Create a `style.css` file with the following content to style the progress bar and create the fade-in effect:

```css
/* Styles for the body element */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #fff;
}

/* Styles for the progress bar container */
.progress-container {
    width: 300px;
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    transition: opacity 0.25s ease-out;
}

/* Styles for the progress bar */
.progress-bar {
    display: block;
    height: 100%;
    background-color: #6a6a6a;
    width: 0;
    transition: width 0.5s ease;
}

/* CSS for a fade-in animation */
.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
}

/* Keyframes for the fadeIn animation */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
```

### Step 4: Referencing `style.css`

In your `index.html`, reference the `style.css` file to apply the defined styles:

```html
<link rel="stylesheet" href="style.css" />
```

By following these steps, you can implement a smooth loading experience in your Flutter Web application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
