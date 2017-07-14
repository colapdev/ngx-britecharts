# ngx-britecharts

### How to install
```
npm install @colap-dev/ngx-britecharts britecharts --save
```
```
import { BarChartModule } from '@colap-dev/ngx-britecharts/dist';

@NgModule({
  imports: [
    ...
    BarChartModule
  ],
  declarations: [
   ...
  ],
  providers: [
   ...
  ],
  bootstrap: [...]
})
```

Incluir los estilos que se quieran usar.

this project show how to package a library using ngc.

For more information please visit: http://www.dzurico.com/how-to-create-an-angular-library/

###how to install
npm install

###how to package the library
npm run build

###how to use the package in your project
npm install ../angular2-library  (specify the correct path)

in your module include:
```
import {HelloWorldModule} from 'angular2-sdk/dist';

@NgModule({
  imports: [
    ...
    HelloWorldModule
  ],
  declarations: [
   ...
  ],
  providers: [
   ...
  ],
  bootstrap: [...]
})
```

in your view (html)
```
<hello-world></hello-world>
```
