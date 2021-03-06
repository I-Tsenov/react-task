import * as React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Button,
  Grid,
  Container,
  List,
  ListItem,
  IconButton,
  CardContent,
  CardHeader,
  Card
} from "@mui/material";
import { LockOpen, Lock } from "@mui/icons-material";

let data = [
  {
    number: 1,
    cmpy: 1454409,
    country_code: "PL",
    country: "Poland",
    comp_short_name: "Lotos S.A.",
    comp_local_name: "Lotos S.A.",
    cmpy_empl_num: '4,897 <span class="ref-date">(2017)</span>',
    cmpy_lstd: "Listed",
    cmpy_opst: "Operational",
    indu_main_naics:
      "Gasoline Stations with Convenience Stores(44711); Petroleum Refineries(32411); Crude Petroleum Extraction(21112)",
    indu_secondary_naics:
      "Petroleum and Petroleum Products Merchant Wholesalers (except Bulk Stations and Terminals)(42472)",
    indu_main_local:
      "Manufacture And Processing Of Refind Petroleum Products (19.20); Extraction Of Crude Petroleum And Natural Gas (06)",
    incorporation_year: 2002,
    legal_form: "Public Limited Company",
    auditor: "EY, 2019-05-15",
    main_products: "Petrol, diesel",
    description:
      "Grupa Lotos is the second largest producer of fuels in Poland. The company conducts mining, refining and fuel trade business. Lotus is the only Polish company, involved in exploration of oil in the Baltic Sea and in addition to that Lotos's marine area covers 29 thousand km2. At the end of 2010, the share of Lotus in the retail market amounted to 7%, while in May 2011 it rose to 7.5%. Currently, the company has 400 petrol stations functioning on Polish territory. The company's 2015 strategic objectives assume an increase in petrol stations number to 450 and retail market share growth by 10%.",
    headquarters: "ul. Elblaska 135, Postal Code: 80-718",
    url: "www.lotos.pl",
    email: "lotos@grupalotos.pl",
    phone: "+48 (58) 308-71-11",
    fax: "+48 (58) 301-88-38",
    owners: "Skarb Panstwa (53.19%), Nationale-Nederlanden Ofe (6.36%)",
    executives:
      "Zofia Paryla (President), Artur Cieslik (Vice President), Jaroslaw Wrobel (Vice President), Krzysztof Nowicki (Vice President), Piotr Aleksander Walczak (Vice President), Beata Kozlowska-Chyla (Supervisory Board Chairman), Piotr Ciach (Supervisory Board Vice Chairman), Adam Lewandowski (Supervisory Board Member), Dariusz Figura (Supervisory Board Member), Grzegorz Rybicki (Supervisory Board Member), Katarzyna Mackowska (Supervisory Board Member), Rafal Wlodarski (Supervisory Board Member), Katarzyna Lewandowska (Supervisory Secretary)",
    close_price: 6910,
    reference_date: "2022-06-22",
    stock_exchange: "PL-WSE"
  },
  {
    number: 2,
    cmpy: 1454973,
    country_code: "PL",
    country: "Poland",
    comp_short_name: "Totalizator Sportowy Sp. z o.o.",
    comp_local_name: "Totalizator Sportowy Sp. z o.o.",
    cmpy_empl_num: '1,314 <span class="ref-date">(2017)</span>',
    cmpy_lstd: "Unlisted",
    cmpy_opst: "Operational",
    indu_main_naics: "Gambling Industries(7132)",
    indu_main_local: "Gambling And Betting Activities (92.00.Z)",
    incorporation_year: 2001,
    legal_form: "Limited Liability Company",
    auditor:
      '"MORISON FINANSISTA AUDIT" sp????ka z ograniczon?? odpowiedzialno??ci??, 2010-12-31',
    main_products: "Cash gaming, lottery",
    description:
      "Totalizator Sportowy, the owner of the Lotto brand, is a State Treasury of Poland's company, which for 60 years has operated continuously on the domestic market lottery. It has a network of more than 15 000 retail operating system online. The company is one of the most important pillars of the financing of Polish sport and culture.",
    headquarters: "Ul. Targowa 25, Postal Code: 03-728",
    email:
      "centrala@totalizator.pl, sekretariat@totalizator.pl, podatki.centrala@totalizator.pl",
    phone: "+48 (22) 5182379, +48 (22) 5182200",
    fax: "+48 (22) 5182380, +48 (02) 2185183, +48 (22) 5182200",
    owners: "Skarb Panstwa (100.00%)",
    executives:
      "Olgierd Donat Cieslik (President), Bogdan Jan Pukowiec (Management Board Member), Magdalena Lidia Kopka Wojciechowska (Management Board Member), Stanislaw Jan Grabiec (Management Board Member), Anna Kasprzyszak (Supervisory Board Member), Edward Sidoruk (Supervisory Board Member), Grzegorz Soltysinski (Supervisory Board Member), Marcin Eckert (Supervisory Board Member), Ryszard Jan Madziar (Supervisory Board Member)",
    close_price: null,
    reference_date: "1970-01-01",
    stock_exchange: null
  },
  {
    number: 3,
    cmpy: 2343861,
    country_code: "PL",
    country: "Poland",
    comp_short_name: "Energa S.A.",
    comp_local_name: "Energa S.A.",
    cmpy_empl_num: '8,820 <span class="ref-date">(2017)</span>',
    cmpy_lstd: "Listed",
    cmpy_opst: "Operational",
    indu_main_naics:
      "Offices of Other Holding Companies(551112); Fossil Fuel Electric Power Generation(221112); Electric Power Transmission, Control, and Distribution(22112)",
    indu_main_local:
      "Activities Of Holding Companies (64.20); Electric Power Generation, Transmission And Distribution (35.1)",
    incorporation_year: 2007,
    legal_form: "Public Limited Company",
    auditor: "KPMG, 2019-04-30",
    main_products: "Distribution, production and sale of electricity and heat",
    description:
      "Energa is a group of companies engaged in the distribution, production and sale of electricity and heat. The company has 2.9 million customers which gives 16.8% share of electricity sales market in Poland. Energa S.A. is the operator of the electricity distribution system in the area of ??????25% of Poland, exploiting more than 193 thousand miles of power lines, which transmits a total of about 20 TWh energy per year. The distribution network of the group covers an area of nearly 77 thousand square kilometers, which is about 25% of the country.",
    headquarters: "al. Grunwaldzka 472, Postal Code: 80-302",
    url: "www.grupaenerga.pl",
    email: "energa.sa@energa.pl",
    phone: "+48 (58) 778-83-00",
    fax: "+48 (58) 778-83-99",
    owners: "PKN Orlen S.A. (90.92%)",
    executives:
      "Daniel Obajtek (President), Adrianna Sikorska (Vice President), Dominik Wadecki (Vice President), Janusz Szurski (Vice President), Michal Perlik (Vice President), Agnieszka Terlikowska-Kulesza (Supervisory Board Member), Barbara Hajdas (Supervisory Board Member), Iwona Wakszmundzka-Olejniczak (Supervisory Board Member), Jaroslaw Piotr Dybowski (Supervisory Board Member), Michal Rog (Supervisory Board Member), Paula Ziemiecka-Ksiezak (Supervisory Board Member), Sylwia Kobylkiewicz (Supervisory Board Member)",
    close_price: 676,
    reference_date: "2022-06-22",
    stock_exchange: "PL-WSE"
  },
  {
    number: 4,
    cmpy: 1454313,
    country_code: "PL",
    country: "Poland",
    comp_short_name: "Enea S.A.",
    comp_local_name: "Enea S.A.",
    cmpy_empl_num: '15,514 <span class="ref-date">(2017)</span>',
    cmpy_lstd: "Listed",
    cmpy_opst: "Operational",
    indu_main_naics:
      "Electric Power Distribution(221122); Management of Companies and Enterprises(55111); Electric Power Generation(22111)",
    indu_main_local:
      "Trade Of Electricity (35.14.Z); Production Of Electricity (35.11.Z)",
    indu_secondary_local: "Activities Of Holding Companies (64.20.Z)",
    incorporation_year: 2001,
    legal_form: "Public Limited Company",
    auditor: "PwC, 2019-05-17",
    main_products: "Electricity",
    description:
      "Enea Group is the third largest producer and distributor of electricity in Poland. As of 30 June 2013, the Group consisted of the parent company Enea S.A., 15 direct subsidiaries, seven indirect subsidiaries and one associated company. The main activity of the Group is complemented by companies engaged in electricity generation, design and execution of energy investments and construction, as well as IT services and telecommunications. A wide range of Enea S.A. subsidiaries offer also includes the production of measuring equipment, trade equipment and materials, electrical, automotive services and hotel services, relaxation and health. The Company operates in six regions: Wielkopolska, West Pomeranian, Lubuskie, Kujawsko-Pomorskie and in small part, Lower Silesia and the Pomeranian.",
    headquarters: "ul. Pastelowa 8, Postal Code: 60-198",
    url: "www.enea.pl",
    email: "enea@enea.pl",
    phone: "+48 (61) 884-55-44",
    fax: "+48 (61) 884-59-59",
    owners: "Skarb Panstwa (52.29%)",
    executives:
      "Pawel Jan Majewski (President), Dariusz Szymczak (Management Board Member), Lech Adam Zak (Management Board Member), Marcin Pawlicki (Management Board Member), Rafal Marek Mucha (Management Board Member), Tomasz Siwak (Management Board Member), Rafal Wlodarski (Supervisory Board Chairman), Dorota Szymanek (Supervisory Board Member), Maciej Mazur (Supervisory Board Member), Mariusz Pliszka (Supervisory Board Member), Michal Domonik Jaciubek (Supervisory Board Member), Pawel Andrzej Koroblowski (Supervisory Board Member), Piotr Mirkowski (Supervisory Board Member), Radoslaw Kwasnicki (Supervisory Board Member), Roman Stryjski (Supervisory Board Member), Tomasz Lis (Supervisory Board Member)",
    close_price: 983,
    reference_date: "2022-06-22",
    stock_exchange: "PL-WSE"
  }
];

function CompanyCard({ companyData }) {
  return (
    <Card>
      <h2>
        {companyData.comp_local_name}
        <IconButton>
          <Lock />
        </IconButton>
      </h2>
      <CardContent>
        <List>
          {Object.keys(companyData).map((v) => (
            <ListItem>{companyData[v]}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default function App() {
  return (
    <Box>
      <Grid container>
        <Grid item sx={{ display: "flex", direction: "row" }}>
          {data.map((c) => (
            <CompanyCard companyData={c} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

// sx={{ display: "flex", direction: "row" }}

//  export default function BoxSx() {
//   return (
//     <Box sx={{ display: "flex", flexDirection: "row" }}>
//       {data.map((v) => {
//         let content = [];
//         for (const key in v) {
//           if (v.hasOwnProperty(key)) {
//             content.push(
//               <Typography
//                 key={key}
//                 gutterBottom
//                 variant="body2"
//                 sx={{
//                   textOverflow: "ellipsis",
//                   overflow: "hidden",
//                   whiteSpace: "nowrap"
//                 }}
//               >
//                 <strong key={"elname_" + key}>
//                   {elementsName.find((el) => el.value === key)?.label}
//                 </strong>
//                 : {v[key]}
//               </Typography>
//             );
//           }
//         }
//         return (
//           <Box
//             sx={{
//               width: 500,
//               padding: 2,
//               backgroundColor: "primary.light",
//               "&:hover": {
//                 backgroundColor: "primary.main",
//                 opacity: [0.9, 0.8, 0.7]
//               }
//             }}
//           >
//             <Typography gutterBottom variant="h3" key={"header" + v.number}>
//               {v.comp_short_name}
//             </Typography>
//             {content}
//           </Box>
//         );
//       })}
//     </Box>
//   );
// }

// const elementsName = [
//   {
//     value: "number",
//     label: "Number"
//   },
//   {
//     value: "cmpy",
//     label: "Company code"
//   },
//   {
//     value: "country_code",
//     label: "Country code"
//   },
//   {
//     value: "comp_short_name",
//     label: "Company Name"
//   },
//   {
//     value: "comp_local_name",
//     label: "Local language name"
//   },
//   {
//     value: "country",
//     label: "Country"
//   },
//   {
//     value: "activities",
//     label: "Activity"
//   },
//   {
//     value: "cmpy_empl_num",
//     label: "Employees"
//   },
//   {
//     value: "cmpy_lstd",
//     label: "Listed/Unlisted"
//   },
//   {
//     value: "cmpy_opst",
//     label: "Operational Status"
//   },
//   {
//     value: "revenue",
//     label: "Revenue"
//   },
//   {
//     value: "arrow",
//     label: "Arrow"
//   },
//   {
//     value: "revenue_growth",
//     label: "Revenue Growh"
//   },
//   {
//     value: "indu_main_naics",
//     label: "Business - Main (NAICS)"
//   },
//   {
//     value: "indu_secondary_naics",
//     label: "Business - Secondary (NAICS)"
//   },
//   {
//     value: "indu_main_local",
//     label: "Business - Main (local)"
//   },
//   {
//     value: "indu_secondary_local",
//     label: "Business - Secondary (local)"
//   },
//   {
//     value: "incorporation_year",
//     label: "Incorporation year"
//   },
//   {
//     value: "legal_form",
//     label: "Legal Form"
//   },
//   {
//     value: "auditor",
//     label: "Auditor"
//   },
//   {
//     value: "main_products",
//     label: "Products"
//   },
//   {
//     value: "description",
//     label: "Company Description"
//   },
//   {
//     value: "headquarters",
//     label: "Headquarters"
//   },
//   {
//     value: "url",
//     label: "Website"
//   },
//   {
//     value: "email",
//     label: "Email"
//   },
//   {
//     value: "phone",
//     label: "Phone"
//   },
//   {
//     value: "fax",
//     label: "Fax"
//   },
//   {
//     value: "owners",
//     label: "Shareholders"
//   },
//   {
//     value: "executives",
//     label: "Executives"
//   },
//   {
//     value: "close_price",
//     label: "Close price"
//   },
//   {
//     value: "reference_date",
//     label: "Reference date"
//   },
//   {
//     value: "stock_exchange",
//     label: "Stock exchange"
//   }
// ];
