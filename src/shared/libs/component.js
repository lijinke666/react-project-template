/**
 * 获取高阶组件名字
 * @returns name
 */
export function getDisplayName(component) {
  return component.displayName || component.name || "Component";
}
