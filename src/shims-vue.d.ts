/*
 * @Description:告诉ts如何理解vue文件
 * @Autor: pcy
 * @Date: 2022-03-03 14:38:02
 * @LastEditTime: 2022-03-03 14:42:07
 */
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const ComponentOptions: ComponentOptions;
  export default ComponentOptions;
}
