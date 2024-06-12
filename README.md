# PWA
* Can be made using vanilla JS, HTML & CSS
* Accessed via a web address and not the app store
* Can be installed on the mobile home-screen
* Runs in the browser but with access to device features
* Can be used offline
* Can use web push notifications

PWA is made possible through the help of `service worker`
and `manifest.json`. Both convert our traditional web app
to a progressive one.

## What is a Service Worker
Is a script that runs in the background of your browser and manages
network requests for your web application.
They can be used to:
* Cache resources so that they can be accessed even when the user is offline.
* Control offline behavior. One of such situation is determining what happens
when the user tries to access a page that is not cached.
* Provide push notifications, which can be used to keep users updated
with new content.

## Benefits of service worker
* Improved performance: They can cache resources like images and javascript files.
This allows these files to be accessed quickly, even when the user is offline.
* Improved reliability: Service worker are capable of handling network errors,
such as outages. Thus, your web application can continue to function even when the
user is offline.
* Improved engangment: Can be used to provide push notifications, which can be used
to keep users updated with new content.

## Limitations of service worker
* Cannot access the DOM. This means that they cannot directly interact with the user
interface of your web application.
* Service workers cannot access the user's data; This means that they cannot access
the user's cookies, local storage, or IndexDB.

## What is a Web App manifest
Web App manifest which is the `manifest.json` is a configuration file used in PWAs
to provide metadata and settings about the web application. It is a JSON file that
contains some properties, such as the app's name, icons, colours, and other
characteristics.
* Name: The name of your PWA
* Description: A short description of your PWA. What does it do?
* Start URL: The page URL should be opened when the PWA is launched.
* Icons: A list of graphical symbols used to represent your PWA
* Theme Color: The colour that should be used for the UI of your PWA
* Background Color
* Display: The display mode that should be used for your PWA
* Scope: The scope of a PWA is the set of resources that are accessible to the PWA
when it is running offline
