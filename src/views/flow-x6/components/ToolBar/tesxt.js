// graph.addNode({
//   id: "2",
//   shape: "flow-animate",
//   x: 300,
//   y: 128,
//   width: 120,
//   height: 200,
//   data: {
//     title: "反应沉淀池",
//     active: this.active[0],
//   },
// });
// graph.addNode({
//   id: "1",
//   shape: "flow-button",
//   x: 100,
//   y: 200,
//   width: 80,
//   height: 50,
//   data: {
//     title: "源水进水管",
//   },
// });
// graph.addEdge({
//   shape: "double-edge",
//   id: "oneEdge",
//   source: { cell: "1", port: "right" }, // 源节点和链接桩 ID
//   target: { cell: "2", port: "left" },
//   attrs: {
//     line: {
//       stroke: "rgba(0, 188, 212)",
//       strokeDasharray: 0,
//       strokeWidth: 6,
//       targetMarker: null,
//     },
//     outline: {
//       stroke: "#456d89",
//       strokeWidth: 10,
//     },
//   },
// });
// graph.addNode({
//   id: "4",
//   shape: "flow-animate",
//   x: 800,
//   y: 128,
//   width: 120,
//   height: 200,
//   data: {
//     title: "反冲洗水箱",
//     active: this.active[1],
//   },
// });
// graph.addNode({
//   shape: "image",
//   id: "3",
//   imageUrl: getImg("ldb.png"),
//   attrs: {
//     image: {
//       // fill: 'yellow',
//     },
//   },
//   width: 150,
//   height: 150,
//   x: 500,
//   y: 153,
//   ports: { ...basicPorts },
// });
// graph.addEdge({
//   id: "twoEdge",
//   shape: "double-edge",
//   source: { cell: "2", port: "right" }, // 源节点和链接桩 ID
//   target: { cell: "3", port: "left" },
//   attrs: {
//     line: {
//       stroke: "rgba(0, 188, 212)",
//       strokeDasharray: 0,
//       strokeWidth: 6,
//       targetMarker: null,
//     },
//     outline: {
//       stroke: "#456d89",
//       strokeWidth: 10,
//     },
//   },
// });
// graph.addEdge({
//   id: "threeEdge",
//   shape: "double-edge",
//   source: { cell: "3", port: "right" }, // 源节点和链接桩 ID
//   target: { cell: "4", port: "left" },
//   attrs: {
//     line: {
//       stroke: "rgba(0, 188, 212)",
//       strokeDasharray: 0,
//       strokeWidth: 6,
//       targetMarker: null,
//     },
//     outline: {
//       stroke: "#456d89",
//       strokeWidth: 10,
//     },
//   },
// });
// graph.addNode({
//   x: 310,
//   y: 350,
//   width: 120,
//   height: 40,
//   shape: "flow-text",
//   id: "one",
//   data: {
//     number: this.numbers[0],
//   },
// });
// graph.addNode({
//   x: 810,
//   y: 350,
//   width: 120,
//   height: 40,
//   shape: "flow-text",
//   id: "two",
//   data: {
//     number: this.numbers[1],
//   },
// });
// graph.addNode({
//   x: 270,
//   y: 265,
//   width: 30,
//   height: 60,
//   shape: "flow-chart-rect",
//   id: "three",
//   data: {
//     number: this.numbers[1],
//   },
// });

//   graph.on("node:click", ({ node }) => {
//     // const attrPath = "attrs/switch/transform";
//     const currentId = node.id;
//     const changeNode = graph.getNodes();
//     const changeEdge = graph.getEdges();
//     let currentNum = null;
//     let currentNode = null;
//     let currentEdge = null;
//     switch (currentId) {
//       case "1":
//         // this.active = [true];
//         console.log("changeEdge", changeNode);
//         currentNode = changeNode.find((item) => item.id == "2");
//         currentNode.data.active = true;
//         currentEdge = changeEdge.find((item) => item.id == "oneEdge");
//         currentNum = changeNode.find((item) => item.id == "one");
//         currentNum.setData({
//           number: 8,
//         });
//         currentEdge.attr("line", {
//           stroke: "#1890ff",
//           strokeDasharray: 5,
//           targetMarker: null,
//           style: {
//             animation: "ant-line 30s infinite linear",
//             lineWidth: 5,
//           },
//         });

//         break;
//       case "3":
//         currentNode = changeNode.find((item) => item.id == "4");
//         currentNode.data.active = true;
//         currentEdge = changeEdge.filter(
//           (item) => item.id == "twoEdge" || item.id == "threeEdge"
//         );
//         currentNum = changeNode.find((item) => item.id == "two");
//         currentNum.setData({
//           number: 8,
//         });
//         currentEdge.forEach((edge) => {
//           edge.attr("line", {
//             stroke: "#1890ff",
//             strokeDasharray: 5,
//             targetMarker: null,
//             style: {
//               animation: "ant-line 30s infinite linear",
//               lineWidth: 5,
//             },
//           });
//         });

//         console.log("currentEdge", currentEdge);
//         break;
//     }
//     // const target = current === switchOpen ? switchClose : switchOpen;
//   });

//简陋版本
// const textList = [
//   {
//     text: "源水进水管",
//     x: 35,
//     y: 408,
//   },
//   {
//     text: "粗过滤器",
//     x: 300,
//     y: 400,
//   },
//   {
//     text: "混凝剂投加",
//     x: 375,
//     y: 389,
//   },
//   {
//     text: "静态混合器",
//     x: 490,
//     y: 408,
//   },
//   {
//     text: "消毒剂投加",
//     x: 1333,
//     y: 450,
//   },
//   {
//     text: "清水出水管",
//     x: 1499,
//     y: 450,
//   },
// ];
// const edgeList = [
//   {
//     source: { cell: "5", port: "right" },
//     target: { x: 1660, y: 510 },
//     router: { args: { offset: 32, direction: "H" }, name: "metro" },
//     vertices: [],
//   },
//   {
//     source: { cell: "1", port: "right" },
//     target: { cell: "3", port: "left" },
//     router: { args: { offset: 32, direction: "H" }, name: "metro" },
//     vertices: [{ x: 330, y: 480 }],
//   },
//   {
//     source: { cell: "3", port: "right" },
//     target: { cell: "4", port: "port4" },
//     router: { args: { offset: 32, direction: "H" }, name: "metro" },
//     vertices: [],
//   },
//   {
//     source: { cell: "4", port: "port2" },
//     target: { cell: "5", port: "left" },
//     router: { args: { offset: 32, direction: "H" }, name: "metro" },
//     vertices: [],
//   },
//   {
//     source: { cell: "5", port: "top" },
//     target: { x: 1280, y: 520 },
//     router: { args: { offset: 32, direction: "H" }, name: "metro" },
//     vertices: [
//       { x: 1190, y: 260 },
//       { x: 1230, y: 260 },
//       { x: 1280, y: 260 },
//     ],
//   },
// ];

// textList.forEach((item, key) => {
//   graph.addNode({
//     id: `text-${key}`,
//     shape: "flow-Text-rect",
//     x: item.x,
//     y: item.y,
//     width: 80,
//     height: 42,
//     attrs: {
//       text: {
//         text: item.text,
//       },
//     },
//   });
// });
// graph.addNode({
//   id: "1",
//   shape: "flow-chart-rect",
//   x: 45,
//   y: 460,
//   width: 60,
//   height: 40,
//   attrs: {
//     body: {
//       rx: 24,
//       ry: 24,
//     },
//     text: {
//       text: "源水",
//     },
//   },
// });
// graph.addNode({
//   id: "2",
//   shape: "flow-chart-rect",
//   x: 320,
//   y: 450,
//   width: 30,
//   height: 60,
//   attrs: {
//     text: {
//       text: "",
//     },
//   },
// });
// graph.addNode({
//   id: "3",
//   shape: "flow-chart-rect",
//   x: 480,
//   y: 450,
//   width: 100,
//   height: 50,
//   attrs: {
//     text: {
//       text: "静态混合器",
//     },
//   },
// });

// graph.addNode({
//   id: "4",
//   shape: "flow-animate",
//   x: 720,
//   y: 310,
//   width: 120,
//   height: 200,
//   data: {
//     title: "反应沉淀器",
//     // active: this.active[1],
//   },
//   ports: { ...outerPorts },
// });
// graph.addNode({
//   id: "5",
//   shape: "flow-animate",
//   x: 1114,
//   y: 310,
//   width: 120,
//   height: 200,
//   data: {
//     title: "反冲洗水箱",
//     // active: this.active[1],
//   },
// });
//   edgeList.forEach((item, index) => {
//   graph.addEdge({
//     id: `edge-${index}`,
//     shape: "double-edge",
//     source: item.source, // 源节点和链接桩 ID
//     target: item.target,
//     router: item.router,
//     attrs: {
//       line: {
//         stroke: "rgba(0, 188, 212)",
//         strokeDasharray: 0,
//         strokeWidth: 6,
//         targetMarker: null,
//       },
//       outline: {
//         stroke: "#456d89",
//         strokeWidth: 10,
//       },
//     },
//     vertices: item.vertices,
//   });
// });
