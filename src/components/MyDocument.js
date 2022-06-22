import React from "react";
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import frontCover from "../assets/images/front-cover.png"
import backCover from "../assets/images/back-cover.png"
import latoRegular from '../assets/styles/pdfFonts/Lato/Lato-Regular.ttf'
import kollektif from '../assets/styles/pdfFonts/kollektif/Kollektif.ttf'



export default function MyDocument () {

    Font.register({ family: 'Lato', src: latoRegular });
    Font.register({ family: 'Kollektif', src: kollektif });

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'colunm',
          backgroundColor: '#AAAAAA'
        },
        title: {
            fontFamily: 'Kollektif',
        },
        section: {
            fontFamily: 'Lato',
            textAlign: "right",
            color: '#FFFFFF'
        },
        pageBackground: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: '-1'
          },
      });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={{
                        position: 'fixed',
                        top: "60px",
                        right: '53px',
                        fontSize: '12px',}}
                    >
                        JUNHO 2022
                    </Text>
                    <Text style={{
                        width: '300px',
                        position: 'fixed',
                        top: "240px",
                        left: '300px',
                        fontSize: '45px',
                        textAlign: "left"}}
                    >
                        PROPOSTA COMERCIAL
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "455px",
                        right: '55px',
                        textAlign: "right"}}
                    >
                        PROPOSTO POR:
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "473px",
                        right: '55px',
                        textAlign: "right",
                        fontSize: '12px',}}
                    >
                        TRYENERGY ENERGIA FOTOVOLTAICA
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "542px",
                        right: '55px',
                        textAlign: "right"}}
                    >
                        PROPOSTO A:
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "560px",
                        right: '55px',
                        textAlign: "right",
                        fontSize: '12px',}}
                    >
                        NATHÃ ALVES ARAUJO
                    </Text>
                </View>
                <Image src={frontCover} style={styles.pageBackground} />
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={{
                        position: 'fixed',
                        top: "60px",
                        right: '53px',
                        fontSize: '12px',}}
                    >
                        JUNHO 2022
                    </Text>
                    <Text style={{
                        width: '300px',
                        position: 'fixed',
                        top: "240px",
                        left: '300px',
                        fontSize: '45px',
                        textAlign: "left"}}
                    >
                        PROPOSTA COMERCIAL
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "455px",
                        right: '55px',
                        textAlign: "right"}}
                    >
                        PROPOSTO POR:
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "473px",
                        right: '55px',
                        textAlign: "right",
                        fontSize: '12px',}}
                    >
                        TRYENERGY ENERGIA FOTOVOLTAICA
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "542px",
                        right: '55px',
                        textAlign: "right"}}
                    >
                        PROPOSTO A:
                    </Text>
                    <Text style={{
                        position: 'fixed',
                        top: "560px",
                        right: '55px',
                        textAlign: "right",
                        fontSize: '12px',}}
                    >
                        NATHÃ ALVES ARAUJO
                    </Text>
                </View>
                <Image src={backCover} style={styles.pageBackground} />
            </Page>
        </Document>
    )
}