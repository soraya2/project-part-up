
# Optimisation Audit
The goal of this project was to optimize the website of the open source project part-up. I optimized the website using techniques like critical CSS, uglyfying an concatenated javascript, img optimization, lazy loading and async font loading with the css font api.

## internet speed
2G (150ms, 300kb/s, 150kb/s)

## no optimisation

- **Requests:** 42
- **Transfered:** 6.3MB
- **DOMContentLoaded:** 3min
- **Load:** 3.5min

![alt tag](https://github.com/soraya2/rijksmuseumapp_/blob/master/screenshots/not_optimized.jpg)

## js Opitmized
Bundeld and uglified javascript

- **Requests:** 20
- **Transfered:** 343KB
- **DOMContentLoaded:** 40.68s
- **Load:**  40.68

![alt tag](https://github.com/soraya2/rijksmuseumapp_/blob/master/screenshots/optimized-js.jpg)

## optimized images
resized, compressed images and added webp format

- **Requests:** 20
- **Transfered:** 2.9MB
- **DOMContentLoaded:** 700ms
- **Load:** 31.73s

![alt tag](https://github.com/soraya2/rijksmuseumapp_/blob/master/screenshots/performance_imgoptimize.jpg)


## Total

- **Requests:** 20
- **Transfered:** 2.9MB
- **DOMContentLoaded:** 6.5s
- **Load:** 10.56s

![alt tag](https://github.com/soraya2/rijksmuseumapp_/blob/master/screenshots/total.jpg)

## before Google Pagespeed Insight
![alt tag](https://github.com/soraya2/rijksmuseumapp_/blob/master/screenshots/performance_start.jpg)


## Final Google Pagespeed Insight
![alt tag](https://github.com/soraya2/rijksmuseumapp_/blob/master/screenshots/total.jpg)


## Results compared with first test

### Start                           End
- **Requests:** 38                 | **Requests:** 24
- **Transfered:** 3.3MB            | **Transfered:** 380kb
- **DOMContentLoaded:** 3min       | **DOMContentLoaded:** 6.78s
- **Total load:** 3.5min           | **Total load:** 11,46s

