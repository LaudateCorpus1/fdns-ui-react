import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

// set the prop types from predefined shapes or standard types
const propTypes = {
  onExport: PropTypes.func,
};

// set the defaults
const defaultProps = {
  onExport() {},
};

const icoCSV = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTYgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+MTQ4MDQ2ODY4OV8xOTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb21wLWVuZHBvaW50cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTMwNC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDI2Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDMzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSIxNDgwNDY4Njg5XzE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOC4wMDAwMDAsIDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXllcl8xIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJYTUxJRF8xNjhfIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iWE1MSURfODNfIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF84N18iIGZpbGw9IiNFOUVCRUMiIHBvaW50cz0iMTEuMDgwNDEyNCAwIDEuMDY4MDQxMjQgMCAxLjA2ODA0MTI0IDIwIDE1Ljk2NzAxMDMgMjAgMTUuOTY3MDEwMyA0LjY3MiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzg2XyIgZmlsbD0iI0RDRTBFMiIgcG9pbnRzPSIxMS4wODA0MTI0IDAgMTUuOTY3MDEwMyA0LjY3MiAxMS4wODA0MTI0IDQuNjcyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iWE1MSURfODVfIiBmaWxsPSIjQkY2MTQ5IiB4PSIwLjAzMjk4OTY5MDciIHk9IjExLjcxMiIgd2lkdGg9IjEzLjU2NzAxMDMiIGhlaWdodD0iNi4yNDQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjA5ODk5NjQ5LDEzLjczOTgzNzYgQzUuMjk5NTE4MzMsMTMuOTMxMjQ0OSA1LjQxMDg0NTM0LDE0LjE0ODY5MDYgNS40MzI5ODA4NywxNC4zOTIxODE0IEw1LjA1NDA3NDYyLDE0LjM5MjE4MTQgQzUuMDExMTA1NjUsMTQuMjA3Mjg0NiA0LjkyNTQ5NDUzLDE0LjA2MDgwMTcgNC43OTcyMzg2OCwxMy45NTI3MjgzIEM0LjY2ODk4MjgzLDEzLjg0NDY1NDggNC40ODg5NzE2MSwxMy43OTA2MTg5IDQuMjU3MTk5NjIsMTMuNzkwNjE4OSBDMy45NzQ2NDYxMiwxMy43OTA2MTg5IDMuNzQ2NDU4MywxMy44ODk5MDE4IDMuNTcyNjI5MzEsMTQuMDg4NDcwNSBDMy4zOTg4MDAzMSwxNC4yODcwMzkyIDMuMzExODg3MTIsMTQuNTkxMzk4MSAzLjMxMTg4NzEyLDE1LjAwMTU1NjQgQzMuMzExODg3MTIsMTUuMzM3NDk1NiAzLjM5MDMzNjg1LDE1LjYwOTk1MzggMy41NDcyMzg2OCwxNS44MTg5MzkyIEMzLjcwNDE0MDUxLDE2LjAyNzkyNDYgMy45MzgxODc2NSwxNi4xMzI0MTU4IDQuMjQ5Mzg3MTIsMTYuMTMyNDE1OCBDNC41MzU4NDY4OCwxNi4xMzI0MTU4IDQuNzUzOTQzNjYsMTYuMDIyMzkwOCA0LjkwMzY4Mzk5LDE1LjgwMjMzNzYgQzQuOTgzMTExNDcsMTUuNjg2NDUxNyA1LjA0MjM1NTY3LDE1LjUzNDEwOTQgNS4wODE0MTgzNywxNS4zNDUzMDY0IEw1LjQ2MDMyNDYyLDE1LjM0NTMwNjQgQzUuNDI2NDcwMjgsMTUuNjQ3MzkxMiA1LjMxNDQ5MjI0LDE1LjkwMDY0MzkgNS4xMjQzODcxMiwxNi4xMDUwNzIgQzQuODk2NTIxNCwxNi4zNTExNjcgNC41ODkyMzI4LDE2LjQ3NDIxMjYgNC4yMDI1MTIxMiwxNi40NzQyMTI2IEMzLjg2OTE3NzEyLDE2LjQ3NDIxMjYgMy41ODkyMzIsMTYuMzczMzAyMiAzLjM2MjY2ODM3LDE2LjE3MTQ3ODMgQzMuMDY0NDg5NzksMTUuOTA0NTQ5OSAyLjkxNTQwMjc0LDE1LjQ5MjQ0NDYgMi45MTU0MDI3NCwxNC45MzUxNTAxIEMyLjkxNTQwMjc0LDE0LjUxMTk3MDkgMy4wMjczODA3OSwxNC4xNjQ5NjkyIDMuMjUxMzQwMjQsMTMuODk0MTM0NSBDMy40OTM1Mjg5NSwxMy41OTk4NjIyIDMuODI3NTA5OTksMTMuNDUyNzI4MyA0LjI1MzI5MzM3LDEzLjQ1MjcyODMgQzQuNjE2NTc2NDMsMTMuNDUyNzI4MyA0Ljg5ODQ3NDY2LDEzLjU0ODQzMDQgNS4wOTg5OTY0OSwxMy43Mzk4Mzc2IFogTTYuMzg2ODg3MTQsMTUuNDc0MjEyNiBDNi4zOTYwMDE3NiwxNS42MzY5NzM5IDYuNDM0NDEyODQsMTUuNzY5MTM0IDYuNTAyMTIxNTEsMTUuODcwNjk3IEM2LjYzMTAyODQxLDE2LjA2MDgwMjEgNi44NTgyMzk2NywxNi4xNTU4NTMzIDcuMTgzNzYyMTQsMTYuMTU1ODUzMyBDNy4zMjk1OTYyLDE2LjE1NTg1MzMgNy40NjI0MDczNywxNi4xMzUwMjAxIDcuNTgyMTk5NjQsMTYuMDkzMzUzMyBDNy44MTM5NzE2MywxNi4wMTI2MjM3IDcuOTI5ODU1ODksMTUuODY4MDkzOSA3LjkyOTg1NTg5LDE1LjY1OTc1OTUgQzcuOTI5ODU1ODksMTUuNTAzNTA4NyA3Ljg4MTAyODI1LDE1LjM5MjE4MTcgNy43ODMzNzE1MSwxNS4zMjU3NzUxIEM3LjY4NDQxMjY4LDE1LjI2MDY3MDcgNy41Mjk0NjYzMiwxNS4yMDQwMzA2IDcuMzE4NTI3NzYsMTUuMTU1ODUzMyBMNi45Mjk4NTU4OSwxNS4wNjc5NjI2IEM2LjY3NTk0ODM3LDE1LjAxMDY3MDcgNi40OTYyNjI2NiwxNC45NDc1MjAzIDYuMzkwNzkzMzksMTQuODc4NTA5NSBDNi4yMDg1MDA4MSwxNC43NTg3MTczIDYuMTE3MzU1ODksMTQuNTc5NjgyNiA2LjExNzM1NTg5LDE0LjM0MTQwMDEgQzYuMTE3MzU1ODksMTQuMDgzNTg2NCA2LjIwNjU0NzcsMTMuODcxOTk5OSA2LjM4NDkzNDAxLDEzLjcwNjYzNDUgQzYuNTYzMzIwMzIsMTMuNTQxMjY5MSA2LjgxNTkyMTk2LDEzLjQ1ODU4NzYgNy4xNDI3NDY1MSwxMy40NTg1ODc2IEM3LjQ0MzUyOTI2LDEzLjQ1ODU4NzYgNy42OTkwNjA1NiwxMy41MzExNzgxIDcuOTA5MzQ4MDcsMTMuNjc2MzYxMSBDOC4xMTk2MzU1OCwxMy44MjE1NDQxIDguMjI0Nzc3NzYsMTQuMDUzNjM4MSA4LjIyNDc3Nzc2LDE0LjM3MjY1MDEgTDcuODU5NTQzMzksMTQuMzcyNjUwMSBDNy44NDAwMTIwNCwxNC4yMTkwMDM1IDcuNzk4MzQ1NzksMTQuMTAxMTY2MiA3LjczNDU0MzM5LDE0LjAxOTEzNDUgQzcuNjE2MDUzMjEsMTMuODY5Mzk0MiA3LjQxNDg4MzM1LDEzLjc5NDUyNTEgNy4xMzEwMjc3NiwxMy43OTQ1MjUxIEM2LjkwMTg1OTk1LDEzLjc5NDUyNTEgNi43MzcxNDgwNSwxMy44NDI3MDE3IDYuNjM2ODg3MTQsMTMuOTM5MDU2NCBDNi41MzY2MjYyMiwxNC4wMzU0MTEgNi40ODY0OTY1MSwxNC4xNDczODkxIDYuNDg2NDk2NTEsMTQuMjc0OTkzOSBDNi40ODY0OTY1MSwxNC40MTU2MTk2IDYuNTQ1MDg5NjcsMTQuNTE4NDgzMiA2LjY2MjI3Nzc2LDE0LjU4MzU4NzYgQzYuNzM5MTAxMDYsMTQuNjI1MjU0NSA2LjkxMjkyNzQ1LDE0LjY3NzMzNzMgNy4xODM3NjIxNCwxNC43Mzk4Mzc2IEw3LjU4NjEwNTg5LDE0LjgzMTYzNDUgQzcuNzgwMTE3MjcsMTQuODc1OTA1NiA3LjkyOTg1NTM2LDE0LjkzNjQ1MTggOC4wMzUzMjQ2NCwxNS4wMTMyNzUxIEM4LjIxNzYxNzIxLDE1LjE0NzM5MDQgOC4zMDg3NjIxNCwxNS4zNDIwNDk5IDguMzA4NzYyMTQsMTUuNTk3MjU5NSBDOC4zMDg3NjIxNCwxNS45MTQ5Njk0IDguMTkzMjAzNCwxNi4xNDIxODA3IDcuOTYyMDgyNDUsMTYuMjc4OTAwMSBDNy43MzA5NjE1LDE2LjQxNTYxOTYgNy40NjI0MDk1LDE2LjQ4Mzk3ODMgNy4xNTY0MTgzOSwxNi40ODM5NzgzIEM2Ljc5OTY0NTc3LDE2LjQ4Mzk3ODMgNi41MjAzNTE2OSwxNi4zOTI4MzMzIDYuMzE4NTI3NzYsMTYuMjEwNTQwOCBDNi4xMTY3MDM4NCwxNi4wMjk1NTAzIDYuMDE3NzQ2NDksMTUuNzg0MTEgNi4wMjE2NTI3NiwxNS40NzQyMTI2IEw2LjM4Njg4NzE0LDE1LjQ3NDIxMjYgWiBNOS4yMjc1MTIxNSwxMy41MzA4NTMzIEwxMC4wNTE3MzA5LDE1Ljk3NDIxMjYgTDEwLjg2NjE4NCwxMy41MzA4NTMzIEwxMS4zMDE3MzA5LDEzLjUzMDg1MzMgTDEwLjI1NDg1NTksMTYuMzk5OTkzOSBMOS44NDI3NDY1MywxNi4zOTk5OTM5IEw4Ljc5NzgyNDY1LDEzLjUzMDg1MzMgTDkuMjI3NTEyMTUsMTMuNTMwODUzMyBaIiBpZD0iQ1NWIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iWE1MSURfODRfIiBmaWxsPSIjQTg0ODM1IiBwb2ludHM9IjAuMDMyOTg5NjkwNyAxNy45NTYgMS4wNjgwNDEyNCAxOC44MDQgMS4wNjgwNDEyNCAxNy45NTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
const icoJSON = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTUgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvLWZpbGUtanNvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb21wLWVuZHBvaW50cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTQwMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDI2Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEyOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvLWZpbGUtanNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDAwMDAwLCA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGF5ZXJfMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iWE1MSURfMjJfIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iWE1MSURfMTQyXyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF8xNDZfIiBmaWxsPSIjRTlFQkVDIiBwb2ludHM9IjEwLjM4Nzg4NjYgMCAxLjAwMTI4ODY2IDAgMS4wMDEyODg2NiAyMCAxNC45NjkwNzIyIDIwIDE0Ljk2OTA3MjIgNC42NzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzE0NV8iIGZpbGw9IiNEREUwRTIiIHBvaW50cz0iMTAuMzg3ODg2NiAwIDE0Ljk2OTA3MjIgNC42NzIgMTAuMzg3ODg2NiA0LjY3MiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iWE1MSURfMTQ0XyIgZmlsbD0iIzNFMERBRCIgeD0iMC4wMzA5Mjc4MzUxIiB5PSIxMS43MTIiIHdpZHRoPSIxMy41MDc4OTUyIiBoZWlnaHQ9IjYuMjQ0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF8xNDNfIiBmaWxsPSIjMzMwQTkwIiBwb2ludHM9IjAuMDMwOTI3ODM1MSAxNy45NTYgMS4wMDEyODg2NiAxOC44MDQgMS4wMDEyODg2NiAxNy45NTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0iSlNPTiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIzLjI3MjcyNzI3IiBmb250LXdlaWdodD0ibm9ybWFsIiBsZXR0ZXItc3BhY2luZz0iMC4xNjM2MzYzNyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9IjEuNTc4OTQ3MzciIHk9IjE1LjkxNjY2NjciPkpTTzwvdHNwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9IjguNDM0NzM1NzQiIHk9IjE1LjkxNjY2NjciPk48L3RzcGFuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
const icoXLSX = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTYgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMTI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwLjM4NDYxNTM4NSIgd2lkdGg9IjkuMjYzMTU3ODkiIGhlaWdodD0iOS4yMzA3NjkyMyI+PC9yZWN0PgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iOS4yNjMxNTc4OSIgaGVpZ2h0PSI5LjIzMDc2OTIzIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImNvbXAtZW5kcG9pbnRzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTcuMDAwMDAwLCAtNDQ4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjAwMDAwMCwgMjYyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTc3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcuMDAwMDAwLCA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMTQ4MDQ2ODY3Nl8yMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGF5ZXJfMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlhNTElEXzIyXyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJYTUxJRF8xNDJfIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF8xNDZfIiBmaWxsPSIjRTlFQkVDIiBwb2ludHM9IjExLjA4MDQxMjQgMCAxLjA2ODA0MTI0IDAgMS4wNjgwNDEyNCAyMCAxNS45NjcwMTAzIDIwIDE1Ljk2NzAxMDMgNC42NzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF8xNDVfIiBmaWxsPSIjRERFMEUyIiBwb2ludHM9IjExLjA4MDQxMjQgMCAxNS45NjcwMTAzIDQuNjcyIDExLjA4MDQxMjQgNC42NzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJYTUxJRF8xNDNfIiBmaWxsPSIjMkI2MTQzIiBwb2ludHM9IjAuMDMyOTg5NjkwNyAxNy45NTYgMS4wNjgwNDEyNCAxOC44MDQgMS4wNjgwNDEyNCAxNy45NTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS42ODQyMTEsIDkuNTgzMzMzKSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDguMzMzMzMzKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJSZWN0YW5nbGUtMjEiIHN0cm9rZT0iIzA4NzQzQiIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIuMjUiIGZpbGw9IiNGRkZGRkYiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjMDg3NDNCIiBwb2ludHM9IjUuNzA3MjE0NDggNy4zMDc2OTIzMSA0LjYyMzcxNTM5IDUuNzkyNzU3NDcgMy40ODYxMzQ2IDcuMzA3NjkyMzEgMS44OTExOTAzOCA3LjMwNzY5MjMxIDMuODY5ODM1MDEgNC44NDYxNTM4NSAyLjI3MjA5MzQ2IDIuNjkyMzA3NjkgMy44ODI4ODkyMSAyLjY5MjMwNzY5IDQuNjMwNzA4NzIgMy44NjMxMDY5MSA1LjQyNzk0NzcyIDIuNjkyMzA3NjkgNy4wNjcxODI5OSAyLjY5MjMwNzY5IDUuMzkyMDQ4NjUgNC44NDYxNTM4NSA3LjI5NDY5OTE1IDcuMzA3NjkyMzEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
const icoXML = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTYgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+MTQ4MDQ2ODY3Nl8yMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb21wLWVuZHBvaW50cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTM1Mi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDI2Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDgxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSIxNDgwNDY4Njc2XzIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOC4wMDAwMDAsIDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXllcl8xIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJYTUxJRF8yMl8iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJYTUxJRF8xNDJfIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzE0Nl8iIGZpbGw9IiNFOUVCRUMiIHBvaW50cz0iMTEuMDgwNDEyNCAwIDEuMDY4MDQxMjQgMCAxLjA2ODA0MTI0IDIwIDE1Ljk2NzAxMDMgMjAgMTUuOTY3MDEwMyA0LjY3MiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iWE1MSURfMTQ1XyIgZmlsbD0iI0RERTBFMiIgcG9pbnRzPSIxMS4wODA0MTI0IDAgMTUuOTY3MDEwMyA0LjY3MiAxMS4wODA0MTI0IDQuNjcyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJYTUxJRF8xNDRfIiBmaWxsPSIjRDc3QjE1IiB4PSIwLjAzMjk4OTY5MDciIHk9IjExLjcxMiIgd2lkdGg9IjEzLjU2NzAxMDMiIGhlaWdodD0iNi4yNDQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMuMzE4NTMxOTQsMTYuMjk5OTg3OCBMMi44NDk3ODE5NCwxNi4yOTk5ODc4IEwzLjg3NzEyNTY5LDE0LjgyOTI4NDcgTDIuOTE0MjM1MDYsMTMuNDMwODQ3MiBMMy40MDA1NjMxOSwxMy40MzA4NDcyIEw0LjEzMjk4NTA2LDE0LjUyODUwMzQgTDQuODU5NTQ3NTYsMTMuNDMwODQ3MiBMNS4zMjI0MzgxOSwxMy40MzA4NDcyIEw0LjM1OTU0NzU2LDE0LjgyOTI4NDcgTDUuMzY5MzEzMTksMTYuMjk5OTg3OCBMNC44ODY4OTEzMSwxNi4yOTk5ODc4IEw0LjExMzQ1MzgxLDE1LjEyMDMwMDMgTDMuMzE4NTMxOTQsMTYuMjk5OTg3OCBaIE01LjkzMDY0MTMzLDEzLjQzMDg0NzIgTDYuNDg3MjgxOTYsMTMuNDMwODQ3MiBMNy4zMTE1MDA3MSwxNS44NTY2Mjg0IEw4LjEyOTg2MDA4LDEzLjQzMDg0NzIgTDguNjgwNjQxMzMsMTMuNDMwODQ3MiBMOC42ODA2NDEzMywxNi4yOTk5ODc4IEw4LjMxMTUwMDcxLDE2LjI5OTk4NzggTDguMzExNTAwNzEsMTQuNjA2NjI4NCBDOC4zMTE1MDA3MSwxNC41NDgwMzQ0IDguMzEyODAyNzgsMTQuNDUxMDMwMSA4LjMxNTQwNjk2LDE0LjMxNTYxMjggQzguMzE4MDExMTMsMTQuMTgwMTk1NCA4LjMxOTMxMzIxLDE0LjAzNTAxNDYgOC4zMTkzMTMyMSwxMy44ODAwNjU5IEw3LjUwMDk1MzgzLDE2LjI5OTk4NzggTDcuMTE2MTg4MjEsMTYuMjk5OTg3OCBMNi4yOTE5Njk0NiwxMy44ODAwNjU5IEw2LjI5MTk2OTQ2LDEzLjk2Nzk1NjUgQzYuMjkxOTY5NDYsMTQuMDM4MjY5NCA2LjI5MzU5NzA0LDE0LjE0NTM2NDcgNi4yOTY4NTIyNywxNC4yODkyNDU2IEM2LjMwMDEwNzQ5LDE0LjQzMzEyNjUgNi4zMDE3MzUwOCwxNC41Mzg5MTk3IDYuMzAxNzM1MDgsMTQuNjA2NjI4NCBMNi4zMDE3MzUwOCwxNi4yOTk5ODc4IEw1LjkzMDY0MTMzLDE2LjI5OTk4NzggTDUuOTMwNjQxMzMsMTMuNDMwODQ3MiBaIE05LjQ3MjQzODIyLDEzLjQzMDg0NzIgTDkuODYxMTEwMSwxMy40MzA4NDcyIEw5Ljg2MTExMDEsMTUuOTU4MTkwOSBMMTEuMzE0MjM1MSwxNS45NTgxOTA5IEwxMS4zMTQyMzUxLDE2LjI5OTk4NzggTDkuNDcyNDM4MjIsMTYuMjk5OTg3OCBMOS40NzI0MzgyMiwxMy40MzA4NDcyIFoiIGlkPSJYTUwiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlhNTElEXzE0M18iIGZpbGw9IiNDMTZGMTQiIHBvaW50cz0iMC4wMzI5ODk2OTA3IDE3Ljk1NiAxLjA2ODA0MTI0IDE4LjgwNCAxLjA2ODA0MTI0IDE3Ljk1NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

// define the class
class OptionExport extends Component {
  handleButtonClick = (type) => {
    this.props.onExport(type);
  }

  render() {
    return (
      <div className="option-export">
        <IconButton image={icoCSV} imageAlt="CSV" bsStyle="white" onClick={this.handleButtonClick.bind(null, 'csv')}>.csv</IconButton>
        <IconButton image={icoXML} imageAlt="XML" bsStyle="white" onClick={this.handleButtonClick.bind(null, 'xml')}>.xml</IconButton>
        <IconButton image={icoJSON} imageAlt="JSON" bsStyle="white" onClick={this.handleButtonClick.bind(null, 'json')}>.json</IconButton>
        <IconButton image={icoXLSX} imageAlt="XLSX" bsStyle="white" onClick={this.handleButtonClick.bind(null, 'xlsx')}>.xlsx</IconButton>
      </div>
    );
  }
}

// set the props, defaults and export
OptionExport.propTypes = propTypes;
OptionExport.defaultProps = defaultProps;

export default OptionExport;