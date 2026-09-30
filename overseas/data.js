const CONFIG = {
    holdings: {
        GBP: { amount: 531.98, name: '英镑', flag: '🇬🇧' },
        USD: { amount: 14497.3, name: '美元', flag: '🇺🇸' },
        SGD: { amount: 14877.15, name: '新加坡元', flag: '🇸🇬' }
    },
    date: "2026-05-31",
    targetEUR: 500000,
    currencies: ['GBP', 'USD', 'SGD'],
    baseTargets: ['CNY', 'EUR'],
    apiKey: '51158631ee6ca2bad1206557'
};

const history = {
    "2026-09-16": {
        ORG: {GBP: 531.98, USD: 14497.3, SGD: 14877.15},
        RMB: {GBP: 4822.81, USD: 97520.44, SGD: 78626.35},
        EUR: {GBP: 621.38, USD: 12564.81, SGD: 10130.44}
        },
    "2026-08-03": {
        ORG: {GBP: 530.3, USD: 14457.86, SGD: 14855.88},
        RMB: {GBP: 4821.87, USD: 97820.43, SGD: 78366.91},
        EUR: {GBP: 619.10, USD: 12559.54, SGD: 10061.83}
        }
}