const express = require("express");
const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Stats = require("../modelos/Stats").Stats;
const router = express.Router();
const statsCtl = {};


statsCtl.findAll = async (req, res) => {
    try {
      const estadisticas = await dataSource.getRepository(Stats).find();
      //res.render("Perfil/artistVideo", estadisticas);
      res.render("Perfil/stats", estadisticas);
    } catch (error) {
      console.log(error);
    }
    
  };
  
  
  
  statsCtl.findOneStats = async (req, res) => {
    try {
      const estadisticas = await dataSource
        .getRepository(Stats)
        .findOne({ where: { id: req.params.id } });
      if (Stats) {
        res.render("Perfil/stats", estadisticas);
      } else {
        res.json({
          message: "no existe el producto que estas buscando",
        });
      }
  
    } catch (error) {
      console.log(error);
    }
  };
  
  statsCtl.createStats = async (req, res) => {
    try {
      const {artistId,month_listeners,day_play_songs,year_followers} =
        req.body;
      dataSource.getRepository(Stats).create(req.body);
      await dataSource.getRepository(Stats).save({
        artistId,
        month_listeners,
        day_play_songs,
        year_followers
       
        
      });
      return res.render("Perfil/artistVideo");
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = statsCtl;