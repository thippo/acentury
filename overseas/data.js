const CONFIG = {
    holdings: {
        GBP: { amount: 530.3, name: '英镑', flag: '🇬🇧' },
        USD: { amount: 14457.86, name: '美元', flag: '🇺🇸' },
        SGD: { amount: 14855.88, name: '新加坡元', flag: '🇸🇬' }
    },
    date: "2026-05-31",
    targetEUR: 500000,
    currencies: ['GBP', 'USD', 'SGD'],
    baseTargets: ['CNY', 'EUR'],
    apiKey: '51158631ee6ca2bad1206557'
};

const history = {
    "2026-08-04": {
        ORG: {GBP: 530.3, USD: 14457.86, SGD: 14855.88},
        RMB: {GBP: 4821.87, USD: 97820.43, SGD: 78366.91},
        EUR: {GBP: 619.10, USD: 12559.54, SGD: 10061.83}
        },
    "2026-08-03": {
        ORG: {GBP: 530.3, USD: 14457.86, SGD: 14855.88},
        RMB: {GBP: 4821.87, USD: 97820.43, SGD: 78366.91},
        EUR: {GBP: 619.10, USD: 12559.54, SGD: 10061.83}
        }
}