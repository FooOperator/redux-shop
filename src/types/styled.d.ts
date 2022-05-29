import { DefaultTheme } from 'styled-components';

type Theme = {
    
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { };
};