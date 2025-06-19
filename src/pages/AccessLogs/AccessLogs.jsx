import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../../App.css";
import { InputSearch } from "../../common/InputSearch/InputSearch";
import { usePagination } from "../../../hooks/usePagination";
import { useFetchAccessLogs } from "../../../hooks/useFetchAccessLog";

export const AccessLogs = () => {
    const perPage = 6;
    const { currentPage, nextPage, prevPage, goToPage } = usePagination();
    const [searchQuery, setSearchQuery] = useState('');
    const { accessLogs, pagination } = useFetchAccessLogs(currentPage, perPage, searchQuery);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        goToPage(1);
    }, [searchQuery]);

    if (!accessLogs) {
        return <div>Cargando logs de acceso...</div>;
    }

    return (
        <Container className="containerData">
            <div className="containerDataScroll">

                {/* TITLE */}
                <div className="dataTitle">Logs de Acceso</div>

                <InputSearch onSearch={handleSearch} />

                {/* TABLE */}
                <div className="tableContainerData mt-4">
                    <div className="dataDetailHeaderUsers">
                        {/* <div className="tableDataHeader">Usuario</div> */}
                        <div className="tableDataHeader">Email</div>
                        {/* <div className="tableDataHeader">IP</div> */}
                        <div className="tableDataHeader">Ruta</div>
                        <div className="tableDataHeader">Status</div>
                        <div className="tableDataHeader">Fecha</div>
                        <div className="tableDataHeader">Hora</div>
                    </div>

                    {accessLogs.map((log) => {
                        const date = new Date(log.createdAt);
                        return (
                            <div className="tableDataRow" key={log.id}>
                                {/* <div className="tableDataData">{log.User?.name} {log.User?.lastname}</div> */}
                                <div className="tableDataData">{log.User?.email}</div>
                                {/* <div className="tableDataData">{log.ip_address}</div> */}
                                <div className="tableDataData">{log.route}</div>
                                <div className="tableDataData">{log.status_code}</div>
                                <div className="tableDataData">{date.toLocaleDateString()}</div>
                                <div className="tableDataData">{date.toLocaleTimeString()}</div>
                            </div>
                        );
                    })}
                </div>

                {/* PAGINATION */}
                {pagination.totalPages > 1 && (
                    <div className="mt-4 d-flex justify-content-center align-items-center gap-3">
                        <Button
                            style={{ background: '#5a1a6fde' }}
                            onClick={prevPage}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </Button>

                        {`${currentPage} de ${pagination.totalPages}`}

                        <Button
                            style={{ background: '#5a1a6fde' }}
                            onClick={nextPage}
                            disabled={currentPage === pagination.totalPages}
                        >
                            Siguiente
                        </Button>
                    </div>
                )}
            </div>
        </Container>
    );
};