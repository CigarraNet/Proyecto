import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import styled from "styled-components";
import {
  ContentAccionesTabla,
  Paginacion,
  useMarcaStore,
  variables,
} from "../../../index";
import Swal from "sweetalert2";
import { useState } from "react";

export function TablaMarca({ data, SetopenRegistro, setdataSelect, setAccion }) {
  const { eliminarMarca } = useMarcaStore();
  const [setPagina] = useState(1);

  const editar = (data) => {
    if (data.descripcion === "Generico") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este registro no se permite modificar ya que es valor por defecto.",
      });
      return;
    }
    SetopenRegistro(true);
    setdataSelect(data);
    setAccion("Editar");
  };

  const eliminar = (p) => {
    if (p.descripcion === "Generico") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este registro no se puede eliminar ya que es un valor por defecto.",
      });
      return;
    }
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, ¡no podrás recuperar este registro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28b463",
      cancelButtonColor: "#c62828",
      confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarMarca({ id: p.id });
      }
    });
  };

  const columns = [
    {
      accessorKey: "descripcion",
      header: "Descripcion",
      cell: (info) => (
        <td data-title="Descripcion" className="ContentCell">
          <span>{info.getValue()}</span>
        </td>
      ),
    },
    {
      accessorKey: "acciones",
      header: "",
      cell: (info) => (
        <div className="ContentAccionesTabla">
          <ContentAccionesTabla
            funcionEditar={() => editar(info.row.original)}
            funcionEliminar={() => eliminar(info.row.original)}
          />
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Container>
      <table className="responsive-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((item) => (
            <tr key={item.id}>
              {item.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Paginacion
        table={table}
        irinicio={() => table.setPageIndex(0)}
        pagina={table.getState().pagination.pageIndex + 1}
        setPagina={setPagina}
        maximo={table.getPageCount()}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: ${variables.bpbart}) {
    margin: 2%;
  }
  @media (min-width: ${variables.bphomer}) {
    margin: 2em auto;
  }

  .responsive-table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;

    @media (min-width: ${variables.bpbart}) {
      font-size: 0.9em;
    }
    @media (min-width: ${variables.bpmarge}) {
      font-size: 1em;
    }

    thead {
      position: absolute;
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;

      @media (min-width: ${variables.bpbart}) {
        position: relative;
        height: auto;
        width: auto;
        overflow: auto;
      }

      th {
        border-bottom: 2px solid rgba(115, 115, 115, 0.32);
        font-weight: normal;
        text-align: center;
        color: ${({ theme }) => theme.text};

        &:first-of-type {
          text-align: center;
        }
      }
    }

    tbody,
    tr,
    th,
    td {
      display: block;
      padding: 0;
      text-align: left;
      white-space: normal;
    }

    tr {
      @media (min-width: ${variables.bpbart}) {
        display: table-row;
      }
    }

    th,
    td {
      padding: 2em;
      vertical-align: middle;

      @media (min-width: ${variables.bplisa}) {
        padding: 0.75em 0.5em;
      }
      @media (min-width: ${variables.bpbart}) {
        display: table-cell;
        padding: 0.5em;
      }
      @media (min-width: ${variables.bpmarge}) {
        padding: 0.75em 0.5em;
      }
      @media (min-width: ${variables.bphomer}) {
        padding: 0.75em;
      }
    }

    tbody {
      @media (min-width: ${variables.bpbart}) {
        display: table-row-group;
      }

      tr {
        margin-bottom: 1em;

        @media (min-width: ${variables.bpbart}) {
          display: table-row;
          border: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        &:nth-of-type(even) {
          @media (min-width: ${variables.bpbart}) {
            background-color: rgba(78, 78, 78, 0.12);
          }
        }
      }

      th[scope="row"] {
        @media (min-width: ${variables.bplisa}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
        }
        @media (min-width: ${variables.bpbart}) {
          background-color: transparent;
          text-align: center;
          color: ${({ theme }) => theme.text};
        }
      }

      .ContentCell {
        text-align: right;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        border-bottom: none !important;
      }

      .ContentCell span {
        text-decoration: none !important;
        border-bottom: none !important;
      }

      .ContentAccionesTabla {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        svg {
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        svg:hover {
          transform: scale(1.1);
        }
      }

      td {
        text-align: right;

        @media (min-width: ${variables.bpbart}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
          text-align: center;
        }
      }

      td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: 0.8em;

        @media (min-width: ${variables.bplisa}) {
          font-size: 0.9em;
        }

        @media (min-width: ${variables.bpbart}) {
          content: none;
        }
      }
    }
  }
`;
