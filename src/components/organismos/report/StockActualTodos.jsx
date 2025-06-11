import styled from "styled-components";
import { Document, Page, Text, View, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';
import { useEmpresaStore, useProductosStore } from "../../../index";
import { useQuery } from "@tanstack/react-query";
const styles = StyleSheet.create({
    page:{flexDirection:"row",position:"relative"},
    section:{margin:10,padding:10,flexGrow:1},
    table: { width: "100%", margin: "auto", marginTop: 10 },
    row: {
        flexDirection: "row",
        borderBottom: 1,
        borderBottomColor: "#000",
        height: 24,
        borderLeftColor: "#000",
        borderLeft: 1,
        textAlign: "left",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    cell: {
        flex: 1,
        textAlign:"center",
        fontFamily: "Helvetica",
        borderLeftColor: "#000",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    headerCell: {
        flex: 1,
        backgroundColor: "#dcdcdc",
        fontWeight: "bold",
        fontFamily: "Helvetica",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
});

function StockActualTodos() {
const currentData = new Date();
const formattedDate = `${currentData.toLocaleDateString()} ${currentData.toLocaleTimeString()}`;
const renderTableRow =(rowData,isHeader=false)=> (
    <View style={styles.row} key={rowData.id}>
        <Text style={[styles.cell,isHeader && styles.headerCell]}>
            {
                rowData.descripcion
            }
        </Text>
        <Text style={[styles.cell,isHeader && styles.headerCell]}>
            {rowData.stock}
        </Text>
    </View>
);
const {reportStockProductosTodos} = useProductosStore();
const { dataempresa} = useEmpresaStore();
const { data }= useQuery({
    queryKey:["reporte stock todos",{id_empresa:dataempresa?.id}],queryFn:()=>reportStockProductosTodos({id_empresa:dataempresa?.id}),enabled:!!dataempresa,
})


    return (<Container >
        <PDFViewer className="pdfviewer">
            <Document title="Reporte de Stock todos">
                <Page size="A4" orientation="portrait" >
                    <View style={styles.page}>
                        <View style={styles.section}>
                            <Text style={{fontSize:18,fontWeight:"ultrabold"}}>
                                Stock actual todos
                            </Text>
                            <Text>
                                Fecha y hora del reporte: {formattedDate}
                            </Text>
                            <View>
                                {
                                    renderTableRow(
                                        {
                                            descripcion: "Producto",
                                            stock: "Stock",
                                        },
                                        true
                                    )
                                }
                                {
                                    data?.map((item)=>renderTableRow(item))
                                }
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    </Container>
    );
}
const Container =styled.div`
    width: 100%;
    height: 80vh;
    .pdfviewer{
        width: 100%;
        height: 100%;
    }
`;

export default StockActualTodos;
