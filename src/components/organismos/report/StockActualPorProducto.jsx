import styled from "styled-components";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { Buscador, ListaGenerica, useEmpresaStore, useProductosStore } from "../../../index";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const styles = StyleSheet.create({
  page: { flexDirection: "row", position: "relative" },
  section: { margin: 10, padding: 10, flexGrow: 1 },
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
    textAlign: "center",
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

function StockActualPorProducto() {
  const [stateListaproductos, setstateListaProductos] = useState(false);
  const currentData = new Date();
  const formattedDate = `${currentData.toLocaleDateString()} ${currentData.toLocaleTimeString()}`;

  const {
    reportStockXproducto,
    buscarProductos,
    buscador,
    setBuscador,
    selectproductos,
    productosItemSelect,
  } = useProductosStore();

  const { dataempresa } = useEmpresaStore();

  const { data } = useQuery({
    queryKey: ["reporte stock por producto", {
      id_empresa: dataempresa?.id,
      id: productosItemSelect?.id,
    }],
    queryFn: () => reportStockXproducto({
      id_empresa: dataempresa?.id,
      id: productosItemSelect?.id,
    }),
    enabled: !!dataempresa?.id && !!productosItemSelect?.id,
  });

  const {
    data: dataproductosbuscador,
  } = useQuery({
    queryKey: ["buscar productos", {
      id_empresa: dataempresa?.id,
      descripcion: buscador,
    }],
    queryFn: () => buscarProductos({
      id_empresa: dataempresa?.id,
      descripcion: buscador,
    }),
    enabled: !!dataempresa?.id && buscador?.trim().length > 0,
  });

  const renderTableRow = (rowData, isHeader = false) => (
    <View style={styles.row} key={rowData?.id || `${rowData.descripcion}-${rowData.stock}`}>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {rowData?.descripcion ?? "Sin nombre"}
      </Text>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {rowData?.stock ?? "0"}
      </Text>
    </View>
  );

  return (
    <Container>
      <Buscador
        funcion={() => setstateListaProductos(!stateListaproductos)}
        setBuscador={setBuscador}
      />

      {stateListaproductos && (
        <ListaGenerica
          funcion={(p) => {
            selectproductos(p);
            setBuscador("");
          }}
          setState={() => setstateListaProductos(false)}
          data={dataproductosbuscador}
        />
      )}

      <PDFViewer className="pdfviewer">
        <Document title="Reporte de Stock por Producto">
          <Page size="A4" orientation="portrait">
            <View style={styles.page}>
              <View style={styles.section}>
                <Text style={{ fontSize: 18, fontWeight: "ultrabold" }}>
                  Stock por producto
                </Text>
                <Text>
                  Fecha y hora del reporte: {formattedDate}
                </Text>
                <View style={styles.table}>
                  {renderTableRow({ descripcion: "Producto", stock: "Stock" }, true)}
                  {Array.isArray(data) && data.length > 0
                    ? data.map((item) => renderTableRow(item))
                    : <Text>No hay datos disponibles.</Text>}
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80vh;
  .pdfviewer {
    width: 100%;
    height: 100%;
  }
`;

export default StockActualPorProducto;
