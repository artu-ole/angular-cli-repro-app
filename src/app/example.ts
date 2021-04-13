
export interface Props {
}

export interface TestDefaultExport {
  (): Instance;
}
export interface Instance {}

declare const defaultExport: TestDefaultExport;
export default defaultExport;