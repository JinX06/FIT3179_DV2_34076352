# Australia’s Vegetable Harvest

FIT3179 Data Visualisation 2  
Ong Jin Xiang | 34076352 | Monash University Malaysia | 2026

An interactive visualisation of vegetable production in Australia, covering crop production, changes over time and growing regions.

Website link will be added when published.

Built with HTML, CSS, JavaScript, Vega and Vega-Lite.

## Data sources

- [ABS horticulture](https://www.abs.gov.au/statistics/industry/agriculture/australian-agriculture-horticulture/2024-25): 2020-21 to 2024-25 crop production and nominal farm gate value.
- [Hort Innovation](https://www.horticulture.com.au/about-hort-innovation/what-we-do/data-and-insights/australian-horticulture-statistics-handbook): 2024/25 all-vegetable production and potato supply estimates.
- [UN Comtrade](https://comtradeplus.un.org/TradeFlow?Type=C&Frequency=A&Classification=HS&Period=2025&Reporters=36&Partners=0,784,682,458,702,634&CommodityCodes=070610&Flows=X&Customs=C00&ModeOfTransport=0&secondPartner=0&AggregateBy=NONE&BreakdownMode=classic): calendar 2025 Australian exports of fresh or chilled carrots and turnips.
- [ABS boundaries](https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-4-july-2026-june-2031/access-and-downloads/digital-boundary-files): ASGS Edition 4 state boundaries, July 2026 to June 2031.
- [Natural Earth](https://www.naturalearthdata.com/downloads/110m-cultural-vectors/110m-admin-0-countries/): 110m country boundaries, version 5.1.1.

## Chart specifications

- [Crop production lollipop](js/01_crop_production.vg.json)
- [Production trend](js/02a_tonnes_trend.vg.json)
- [Value trend](js/02b_value_trend.vg.json)
- [Crop change waterfall](js/03_waterfall.vg.json)
- [Crop comparison dots](js/05_dumbbell.vg.json)
- [Crop change heatmap](js/04_heatmap.vg.json)
- [Carrot share map](js/07_choropleth.vg.json)
- [State production map](js/08_symbols.vg.json)

[Hand drawn sketch](submission/hand_drawn_sketch.pdf)
