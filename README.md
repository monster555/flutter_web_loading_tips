# Flutter Web Smooth Loading


https://github.com/monster555/flutter_web_smooth_loading/assets/32662133/34566bb5-7675-43b2-9c31-e3a5efa9d41b


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
  git clone https://github.com/monster555/flutter_web_smooth_loading.git
  ```

2. Enhance Your App: Apply the techniques learned from the guide to your Flutter Web project, and watch as your loading experience becomes smoother and more professional.

## See How Smooth the Loading Experience is on FaceFolio
This is one of my portfolio projects. To see the smooth loading experience in action, visit the [FaceFolio homepage](https://facefolio.dctech.dev).

## Step-by-Step

Enhancing the loading experience in your Flutter Web application involves the following steps. Be sure to follow each step meticulously for a polished result. The provided code snippets should be incorporated into your project as described.

### Step 1: Adding Progress Bar Elements in index.html

In your `index.html` file, add the following `<div>` elements to display the progress bar. These will visually represent the loading progress of the Flutter Engine.

```html
<!-- Create a progress bar container with a nested progress bar -->
<div class="progress-container" id="progressbar">
  <div class="progress-bar" id="progress"></div>
</div>
```
### Step 2: Modifying Script in `index.html`
Inside the `<script>` tag in your `index.html`, make the following modifications to update the progress bar as the Flutter Engine loads:

```javascript
// Get references to the progress bar container and the progress bar element.
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progressbar");

// Set the initial width of the progress bar to 0%.
progress.style.width = `0%`;

// Listen for the "load" event of the window.
window.addEventListener("load", async function (ev) {
  // Set an initial progress of 33% when the page loads.
  progress.style.width = `33%`;

  // Download main.dart.js and initialize the Flutter engine.
  _flutter.loader.loadEntrypoint({
    serviceWorker: {
      serviceWorkerVersion: serviceWorkerVersion,
    },
    onEntrypointLoaded: async function (engineInitializer) {
      // Update progress to 66% after the entry point is loaded.
      progress.style.width = `66%`;

      // Initialize the Flutter engine.
      const appRunner = await engineInitializer.initializeEngine();

      // Set progress to 99% before adding a delay.
      progress.style.width = `99%`;

      // Add a delay using the addDelay function.
      await addDelay(500);

      // Hide the progress bar by reducing its opacity.
      progressBar.style.opacity = 0;

      // Run the Flutter app.
      await appRunner.runApp();

      // Add a fade-in effect to the Flutter view.
      document.querySelector("flutter-view").classList.add("fade-in");
    },
  });
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

Follow these steps diligently to implement a seamless and professional loading experience in your Flutter Web application.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
