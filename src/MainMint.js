import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import B3llionxNFT from './B3llionxNFT.json';

const B3llionxNFTAddress = "0x28F65d06798fdF48cdF094E7879e24166a6693C9";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                B3llionxNFTAddress,
                B3llionxNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response:', response);
            } catch (err) {
                console.log("error:", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" padding="50px" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="40px" textShadow="0 5px #000000">B3llionx</Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >It's 2077. B3llionxNFT is the first project for testing Web3</Text>
                </div>
                {isConnected ? (
                    <div>
                        <Flex align="center" paddingLeft="31%">
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleDecrement}>-</Button>
                            <Input readOnly
                                fontFamily="inherit"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="19px"
                                marginTop="10px"
                                type="number" value={mintAmount} />
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleIncrement}>+</Button>
                        </Flex>
                        <Button
                            backgroundColor="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            marginTop="10px" onClick={handleMint}>Mint Now</Button>
                    </div>
                ) : (
                    <p>You must be connected to mint.</p>
                )}
            </Box>
        </Flex>
    );
};
export default MainMint;