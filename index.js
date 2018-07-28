var iplocation = require('iplocation')

exports.handler = (event, context, callback) => {
    var ip = event.sourceIP;
    // var result = geoip.lookup(ip);
    // var ip = '159.65.146.80';

    iplocation(ip)
    .then(res => {
        // console.log(res)
        callback(null, {result: res, ip: ip});
    })
    .catch(err => {
        console.log(err)
        callback(null, {result: err, ip: ip});
    })
    // var result = context;

    // TODO implement
    // const string = event.string;
    // const reverse = string.split('').reverse().join('');
    // const isPalindrome = (string === reverse);
    
    // const result = isPalindrome ? `${string} is a Palindrome` : `${string} is not a Palindrome`;
    
//   return result;
    // callback(null, {result: result, ip: ip});
};

// exports.getLocation = () => {
//     iplocation('159.65.146.80')
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }
