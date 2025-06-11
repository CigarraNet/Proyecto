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

function ControlEntradasSalidas() {
  const [stateListaproductos, setstateListaProductos] = useState(false);
  const currentData = new Date();
  const formattedDate = `${currentData.toLocaleDateString()} ${currentData.toLocaleTimeString()}`;

  const {
    reportControlxEntredasSalidas,
    buscarProductos,
    buscador,
    setBuscador,
    selectproductos,
    productosItemSelect,
  } = useProductosStore();

  const { dataempresa } = useEmpresaStore();

  const { data } = useQuery({
    queryKey: ["reporte control entrada salida", {
      _id_empresa: dataempresa?.id,
      _id_producto: productosItemSelect?.id,
    }],
    queryFn: () => reportControlxEntredasSalidas({
      _id_empresa: dataempresa?.id,
      _id_producto: productosItemSelect?.id,
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
    <View style={styles.row} key={rowData?.id || `${rowData.descripcion}-${rowData.fecha}`}>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {String(rowData?.nombres ?? "")}
      </Text>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {String(rowData?.descripcion ?? "")}
      </Text>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {String(rowData?.tipo ?? "")}
      </Text>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {String(rowData?.cantidad ?? "")}
      </Text>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {String(rowData?.fecha ?? "")}
      </Text>
      <Text style={[styles.cell, isHeader && styles.headerCell]}>
        {String(rowData?.stock ?? "")}
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
        <Document title="Control Entradas y Salidas">
          <Page size="A4" orientation="landscape">
            <View style={styles.page}>
              <View style={styles.section}>
                <Text style={{ fontSize: 18, fontWeight: "ultrabold" }}>
                  Control de entradas y salidas por producto
                </Text>
                <Text>
                  Fecha y hora del reporte: {formattedDate}
                </Text>
                <View style={styles.table}>
                  {renderTableRow({
                    nombres: "Usuario",
                    descripcion: "Producto",
                    tipo: "Tipo",
                    cantidad: "Cantidad",
                    fecha: "Fecha",
                    stock: "Stock"
                  }, true)}
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

export default ControlEntradasSalidas;
