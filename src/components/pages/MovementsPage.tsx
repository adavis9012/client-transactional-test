import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchMovementsIfNeeded } from '../services/actions/MovementsAction';
import Movements from "../molecules/Movements";
import {useParams} from "react-router";

export const MovementsPage = (props:any) => {
    const { fetchMovementsIfNeeded } = props;
    const {data, error, isLoading} = props.movements;
    const { id } = useParams();

    fetchMovementsIfNeeded();


    return (
        <section className="movements-page">
            {(!isLoading && !error) && <Movements title={`Movimientos del producto ${id}`} movements={data}/>}
        </section>
    )
};

const mapStateToProps = (state:any) => ({
    movements: state.movements
});

const mapDispatchToProps = { fetchMovementsIfNeeded };

export default connect(mapStateToProps, mapDispatchToProps)(MovementsPage);