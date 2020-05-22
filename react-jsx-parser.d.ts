
export interface JsxParserProps {
  allowUnknownElements?: boolean;
  bindings?: any;
  blacklistedAttrs?: any[];
  blacklistedTags?: string[];
  components?: any;
  componentsOnly?: boolean;
  disableFragments?: boolean;
  disableKeyGeneration?: boolean;
  jsx?: string;
  onError?: (error: any) => void;
  showWarnings?: boolean;
  renderError?: (error: string) => any;
  renderInWrapper?: boolean;
}

export default class JsxParser extends React.Component<JsxParserProps> {
  static displayName: string;
  static defaultProps: {
      allowUnknownElements: boolean;
      bindings: {};
      blacklistedAttrs: RegExp[];
      blacklistedTags: string[];
      components: never[];
      componentsOnly: boolean;
      disableFragments: boolean;
      disableKeyGeneration: boolean;
      jsx: string;
      onError: () => void;
      showWarnings: boolean;
      renderError: undefined;
      renderInWrapper: boolean;
  };
  parseJSX: (rawJSX: any) => any;
  parseExpression: (expression: any) => any;
  parseName: (element: any) => any;
  parseElement: (element: any) => any;
  render(): JSX.Element;
}