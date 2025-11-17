# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 3\
My Partner's Key: 9

Our initial shared key: 12

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| VSZZC           | HELLO           |  12 |
| QR QXF JAN HXD  | HI HOW ARE YOU  |  17 |
| AIIX NBUHEM     | GOOD THANKS     |   6 |
| CZF             | BYE             |  25 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer.
By the time the message leaves the application layer, it is encoded in binary. 
We've been working with text for this activity for convenience, 
but let's see what the binary looks like.

Go back to the first encrypted message that you sent (it should be in 
`rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols.
But we know that the real message is in binary.

Select the first six characters from this message and copy them here: j1gaPK

Using the ASCII table, convert these six characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 
01101010 00110001 01100111 01100001 01010000 01001011

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. 
Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Naoki
    Destination: Davi
    Sequence: 1/3
    Data: 01101010 00110001
    =========
    Packet 2:

    Source: Naoki
    Destination: Davi
    Sequence: 2/3 
    Data: 01100111 01100001
    =========
    Packet 3:

    Source: Naoki
    Destination: Davi
    Sequence: 3/3
    Data: 01010000 01001011
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? 
What purpose did each serve in this simulation?
 -The difference between symmetric and assymmetric encryption is that whether 
you share a secret with the person you're messaging or not. Assymmetric 
encryption was used to keep the shared secret impossible to decrypt.

- Why is it important that this protocol uses a new key for each message?
 -It is important that this protocol uses a new key for each message to avoid 
the adversary in the middle being able to see all the messages if they were
able to hack.

- Why is it important that you never share your secret key?
 -It is important to never share your private key so you are the only one
who can decrypt messages that are encrypted with your public key.

- In the transport layer, do these messages use TCP or UDP? Why?
 -In the transport layer, these messages will use TCP for perfect replication
of the message. 

- Now that you've created packets in the transport layer, 
give a short explanation of what happens to these packets in the 
internet layer and in the link layer.
 -The IP protocol in the Internet layer addresses and routes the packet from
the source to destination, and the Link layer transmits the packets through 
protocols such as Ethernet and Wifi.

- This protocol successfully encrypts the **content** of the message. 
Even though and adversary in the middle can't read the content of the message, 
what other information can they still see?
 -They can still see who they messaged to and when the message was sent by
examining the header.
