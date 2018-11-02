import React, { Component } from 'react';
import './App.css';

const Main = ()=>{
<main>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} />
    </Switch>
</main>



}