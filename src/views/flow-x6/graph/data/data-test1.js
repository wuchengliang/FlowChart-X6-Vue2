const graphData = {
  cells: [
    {
      position: { x: 300, y: 128 },
      size: { width: 120, height: 200 },
      view: "vue-shape-view",
      shape: "flow-animate",
      component: { _Ctor: {} },
      ports: {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          right: {
            position: "right",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          left: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
        },
        items: [
          { id: "top", group: "top" },
          { id: "right", group: "right" },
          { id: "bottom", group: "bottom" },
          { id: "left", group: "left" },
        ],
      },
      id: "2",
      data: { title: "一号罐体", active: false },
      zIndex: 1,
    },
    {
      position: { x: 100, y: 200 },
      size: { width: 80, height: 50 },
      view: "vue-shape-view",
      shape: "flow-button",
      component: { _Ctor: {} },
      ports: {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          right: {
            position: "right",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          left: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
        },
        items: [
          { id: "top", group: "top" },
          { id: "right", group: "right" },
          { id: "bottom", group: "bottom" },
          { id: "left", group: "left" },
        ],
      },
      id: "1",
      data: { title: "开始注水" },
      zIndex: 2,
    },
    {
      shape: "double-edge",
      attrs: {
        line: {
          stroke: "rgba(0, 188, 212)",
          strokeWidth: 6,
          targetMarker: null,
          strokeDasharray: 0,
        },
        outline: { stroke: "#456d89", strokeWidth: 10 },
      },
      id: "oneEdge",
      source: { cell: "1", port: "right" },
      target: { cell: "2", port: "left" },
      zIndex: 3,
    },
    {
      position: { x: 800, y: 128 },
      size: { width: 120, height: 200 },
      view: "vue-shape-view",
      shape: "flow-animate",
      component: { _Ctor: {} },
      ports: {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          right: {
            position: "right",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          left: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
        },
        items: [
          { id: "top", group: "top" },
          { id: "right", group: "right" },
          { id: "bottom", group: "bottom" },
          { id: "left", group: "left" },
        ],
      },
      id: "4",
      data: { title: "二号罐体", active: false },
      zIndex: 4,
    },
    {
      position: { x: 500, y: 153 },
      size: { width: 150, height: 150 },
      attrs: { image: { "xlink:href": "/img/ldb.2c31a7ae.png" } },
      visible: true,
      shape: "image",
      id: "3",
      ports: {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          right: {
            position: "right",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          left: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
        },
        items: [
          { id: "top", group: "top" },
          { id: "right", group: "right" },
          { id: "bottom", group: "bottom" },
          { id: "left", group: "left" },
        ],
      },
      zIndex: 5,
    },
    {
      shape: "double-edge",
      attrs: {
        line: {
          stroke: "rgba(0, 188, 212)",
          strokeWidth: 6,
          targetMarker: null,
          strokeDasharray: 0,
        },
        outline: { stroke: "#456d89", strokeWidth: 10 },
      },
      id: "twoEdge",
      source: { cell: "2", port: "right" },
      target: { cell: "3", port: "left" },
      zIndex: 6,
    },
    {
      shape: "double-edge",
      attrs: {
        line: {
          stroke: "rgba(0, 188, 212)",
          strokeWidth: 6,
          targetMarker: null,
          strokeDasharray: 0,
        },
        outline: { stroke: "#456d89", strokeWidth: 10 },
      },
      id: "threeEdge",
      source: { cell: "3", port: "right" },
      target: { cell: "4", port: "left" },
      zIndex: 7,
    },
    {
      position: { x: 310, y: 350 },
      size: { width: 120, height: 40 },
      view: "vue-shape-view",
      shape: "flow-text",
      component: { _Ctor: {} },
      ports: {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          right: {
            position: "right",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          left: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
        },
        items: [
          { id: "top", group: "top" },
          { id: "right", group: "right" },
          { id: "bottom", group: "bottom" },
          { id: "left", group: "left" },
        ],
      },
      id: "one",
      data: { number: 0 },
      zIndex: 8,
    },
    {
      position: { x: 810, y: 350 },
      size: { width: 120, height: 40 },
      view: "vue-shape-view",
      shape: "flow-text",
      component: { _Ctor: {} },
      ports: {
        groups: {
          top: {
            position: "top",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          right: {
            position: "right",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          bottom: {
            position: "bottom",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
          left: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "#5F95FF",
                strokeWidth: 1,
                fill: "#fff",
                style: { visibility: "hidden" },
              },
            },
          },
        },
        items: [
          { id: "top", group: "top" },
          { id: "right", group: "right" },
          { id: "bottom", group: "bottom" },
          { id: "left", group: "left" },
        ],
      },
      id: "two",
      data: { number: 0 },
      zIndex: 9,
    },
  ],
};
export default graphData;
