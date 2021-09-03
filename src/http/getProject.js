import React from 'react';
import { Component } from 'react';
import axiosInstance from './axiosInstance';

const getProjects = async () => {
    try{
        let data = await axiosInstance.get('/')
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

export default getProjects;