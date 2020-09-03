import React, { useState, useCallback, useEffect } from "react";

import {
  Container,
  Content,
  Filterbox,
  SelectState,
  FilterCarInit,
  FilterCarLast,
  FooterBox,
  FilterAdvanced,
  ButtonFilter,
  FilterClean,
} from "./styles";

import { FiMapPin, FiChevronRight } from "react-icons/fi";

import Field from "../../components/Field";
import Button from "../../components/Button";
import Year from "../../components/Year";
import Price from "../../components/Price";

import LogoImg from "../../assets/logo.png";
import CarImg from "../../assets/carro.svg";
import MotoImg from "../../assets/moto.svg";
import { api } from "../../services/api";

import { IMake, IModel, IVersion, IYear, IPrice } from "../../types";

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState("VER OFERTAS");
  const [make, setMake] = useState<IMake[]>([]);
  const [model, setModel] = useState<IModel[]>([]);
  const [version, setVersion] = useState<IVersion[]>([]);
  const [year, setYear] = useState<IYear[]>([]);
  const [price, setPrice] = useState<IPrice[]>([]);

  useEffect(() => {
    api.get("make").then((response) => {
      setMake(response.data);
    });
    setPrice(Price);
    setYear(Year);
  }, []);

  const handleSubmit = useCallback(() => {
    setLoading("Carregando ofertas...");

    setInterval(() => {
      setLoading("Pronto");
    }, 3000);
  }, []);

  const handleModel = useCallback((e) => {
    api
      .get("Model", {
        params: {
          MakeID: e,
        },
      })
      .then((response) => {
        setModel(response.data);
      })
      .catch(() => {
        setModel([]);
      });
  }, []);

  const handleVersion = useCallback((e) => {
    api
      .get("Version", {
        params: {
          ModelID: e,
        },
      })
      .then((response) => {
        setVersion(response.data);
      })
      .catch(() => {
        setVersion([]);
      });
  }, []);

  const handleResetFilter = useCallback(() => {
    api.get("make").then((response) => {
      setMake(response.data);
    });
    setYear([]);
    setPrice([]);
    setMake([]);
    setModel([]);
    setVersion([]);
  }, []);

  return (
    <Container>
      <Content>
        <header>
          <img src={LogoImg} alt="Logo WebMotors" />
        </header>
        <main>
          <div>
            <div>
              <img src={CarImg} alt={CarImg} />
              <span>CARROS</span>
            </div>
            <div>
              <img src={MotoImg} alt={MotoImg} />
              <span>MOTOS</span>
            </div>
          </div>
          <button>Vender meu carro</button>
        </main>
        <Filterbox>
          <SelectState>
            <input type="checkbox" name="novo" id="novo" />
            <span>Novos</span>
            <input type="checkbox" name="novo" id="novo" />
            <span>Usados</span>
          </SelectState>
          <FilterCarInit>
            <div className="left-field">
              <Field
                defaultValue="São paulo"
                typeField="input"
                doubleInput={true}
                name="Onde"
                icon={FiMapPin}
                size={11}
                doubleName="Raio"
              />
            </div>
            <div className="right-field-make">
              <Field
                typeField="select"
                onChange={(e) => handleModel(e.target.value)}
                data={make}
                doubleInput={false}
                name="Marcas"
              />
            </div>
            <div className="right-field-models">
              <Field
                typeField="select"
                onChange={(e) => handleVersion(e.target.value)}
                data={model}
                doubleInput={false}
                name="Modelos"
              />
            </div>
          </FilterCarInit>
          <FilterCarLast>
            <div className="left-field-year">
              <Field
                data={year}
                typeField="select"
                doubleInput={false}
                name="Ano"
              />
            </div>
            <div className="left-field-price">
              <Field
                data={price}
                typeField="select"
                doubleInput={false}
                name="Preço"
              />
            </div>
            <div className="right-field-version">
              <Field
                typeField="select"
                data={version}
                doubleInput={false}
                name="Versão"
              />
            </div>
          </FilterCarLast>
          <FooterBox>
            <FilterAdvanced>
              <FiChevronRight size={20} />
              <span>Busca Avançada</span>
            </FilterAdvanced>
            <ButtonFilter>
              <FilterClean>
                <span onClick={handleResetFilter}>Limpar Filtro</span>
              </FilterClean>
              <Button
                style={{ width: 250, marginLeft: 60 }}
                onClick={handleSubmit}
              >
                {loading}
              </Button>
            </ButtonFilter>
          </FooterBox>
        </Filterbox>
      </Content>
    </Container>
  );
};

export default Dashboard;
