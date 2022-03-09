# ethers-hardhat-error-handling-issue

A simple test case for the problem with an UNPREDICTABLE_GAS_LIMIT error masking normal rejections on view functions, e.g. ownerOf(id) when the token doesn't exist.

See discussions at:
- https://github.com/NomicFoundation/hardhat/issues/2248#issuecomment-1061188445
- https://github.com/ethers-io/ethers.js/discussions/2602#discussioncomment-2312150

Adapted from standalone example at https://github.com/NomicFoundation/hardhat/issues/2248#issuecomment-1062215698

Uses Node.js 14.18.3, yarn 1.22.17. To run example: `yarn example`.
