import styled from "styled-components";
import GlobalStyles from "../shared/GlobalStyles"
import MyDocument from "./MyDocument";
import { PDFViewer } from '@react-pdf/renderer';

export default function App () {
    return (
        <>
            <StyledPDFViewer>
                <GlobalStyles />
                <MyDocument />
            </StyledPDFViewer>
        </>
    )
}

const StyledPDFViewer = styled(PDFViewer)`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`

