import styled from 'styled-components';
import { View } from 'react-native';

export const Colors = {
    primary:'#ffffff',
    secondary:'#E5E7EB',
    tertiay:'#1F2937',
    darkLight:'#9CA3Af',
    brand:'#6D28D9',
    green:'#10B981',
    red:'#EF4444'
};

const {primary, secondary, tertiay, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex:1;
    padding:25px;
    background-color: ${primary}
`