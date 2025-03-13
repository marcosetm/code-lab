### Angular Crash Crouse
[by Traversy Media](https://youtu.be/3dHNOWTI7H8?si=ccH_vB61VnL19jy0)

---

### **1. Install Dependencies**
**Install Node.js** – Download and install from: [Node.js Download](https://nodejs.org/en/download)  

### **2. Install Angular CLI**
**Global installation is recommended*

**Install Angular CLI** – After installing Node.js, open **Command Prompt (CMD)** and run:  
   ```sh
   sudo npm install -g @angular/cli
   ```

### **3. Set Up Angular Project**
**Create a new Angular project**  
   ```sh
   ng new project-name
   ```
   - Choose **CSS** (or any preferred style option).  
   - Say **Yes** to Server-Side Rendering
   - Say **No** to Angular routing.  

[Resolving the follwing errors](https://medium.com/@nazran91/angular-initial-setup-c3cc908a4de):

```sh
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: task-app@0.0.0
npm error Found: @angular/common@undefined
npm error node_modules/@angular/common
npm error   @angular/common@"^19.2.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer @angular/common@"19.2.2" from @angular/platform-browser-dynamic@19.2.2
npm error node_modules/@angular/platform-browser-dynamic
npm error   @angular/platform-browser-dynamic@"^19.2.0" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
```

Within the project's directory `cd project-name`:
```sh
npm config set legacy-peer-deps true
sudo npm cache clean --force
npm install
```

