require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food struggle remember noise huge honey light army gaze'; 
let testAccounts = [
"0x445ef3c7757938f64ce93b8914cf666383bc66cdc8a0a52b1e88738f3eddf8f5",
"0xf87362734f5228e35cbfc4e8401497ad639592c98a138135da6b56f14de3b2a9",
"0xc71da4186d854fa047324a129f7f10b9d33420d7d49f518df8827006703089af",
"0x8320560481482856931f65e5a5664da6cfa3d70382213ffe91b75880795243a1",
"0xab8c215c876c1f1eea851eac97bcc9db1efe505d70d1aa654f1e7c9b0e6ed6f6",
"0xbc6f7090f7867251992660f20528c3db72036664098a1fb291c9fb905f6f985c",
"0x194e27c9295e16e03f3a03958108e83e46c86f38db2c459b12235bd226eb5ef7",
"0xc274e1d422875c8555a96f79732b225c63efa94df16507870183c0ab7cb31904",
"0xe569283ce49637b524aab5f5bdfb6beea26ac0be4b826b94c46a6b205aae3e74",
"0xd4bac449ff213e322bd56ba499e79fbc35d19d601e075579e15984b03b9abde7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
