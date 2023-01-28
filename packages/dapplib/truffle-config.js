require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note still august grace sister army genuine'; 
let testAccounts = [
"0x1b0b2ae9ac3c5291ddf23e36b86f483bb17534c395729bb119aa53764a6796f7",
"0xb46aa0b2a14bf36821192d15c64a35a65047b9a0d440e3acabc9f6e518326a4c",
"0x3c0ec94a5a004de75f6e990ab2232e5cc69d91bc6a79eeb26c168c8e307f392d",
"0xc5f938f85d88c342a49e8803bc8c49eb2db774b684150bf47c9d04cc8d5700db",
"0x724c9283b9b7f7a77f8ee55b41f60ecfbea50354cf86ba4f03db7510328a47cf",
"0x890c877bce7d6a46d973298653f27dc6b6f7545523921c9e8f51f1bf15939abc",
"0xda78f4dd6bab9f500114037fb760adcaf77ba38b57b2820403e3eb24df0faf2d",
"0x71cb2a11d9e38256d6dac0572d7e0f0d9744e9bec8ffdb6d52a829034cd58634",
"0x0edbe8dc49f5cde4e21a1cc6d6ffb3d803bb109a34ba0763db42ac51bbc41636",
"0xd38fb56bfcaf7fe46b47760dc8d0b2acc42572d656fa8893018f7d20fe4c745f"
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
            version: '^0.8.0'
        }
    }
};

