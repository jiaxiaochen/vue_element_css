<template>
    <div class="arrow">
      <div id="topology-container"></div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
        topologyData: {
            nodes: [
                {
                    "id": 0,
                    "x": 410,
                    "y": 100,
                    "name": "12K-1"
                }, {
                    "id": 1,
                    "x": 410,
                    "y": 280,
                    "name": "12K-2"
                }, {
                    "id": 2,
                    "x": 660,
                    "y": 280,
                    "name": "Of-9k-03"
                }, {
                    "id": 3,
                    "x": 660,
                    "y": 100,
                    "name": "Of-9k-02"
                }, {
                    "id": 4,
                    "x": 180,
                    "y": 190,
                    "name": "Of-9k-01"
                }
            ],
            links: [
                {
                    "source": 0,
                    "target": 1
                }, {
                    "source": 1,
                    "target": 2
                }, {
                    "source": 1,
                    "target": 3
                }, {
                    "source": 4,
                    "target": 1
                }, {
                    "source": 2,
                    "target": 3
                }, {
                    "source": 2,
                    "target": 0
                }, {
                    "source": 3,
                    "target": 0
                }, {
                    "source": 0,
                    "target": 4
                }
            ]
        },
        topologyData2 : {
            nodes: [
                {
                    "id": 0,
                    "x": 410,
                    "y": 100,
                    "name": "12K-1"
                },  {
                    "id": 5,
                    "x": 390,
                    "y": 260,
                    "name": "Of-24"
                }, {
                    "id": 3,
                    "x": 660,
                    "y": 100,
                    "name": "Of-9k-02"
                }, {
                    "id": 4,
                    "x": 180,
                    "y": 190,
                    "name": "Of-9k-01"
                }
            ],
            links: [
                {
                    "source": 3,
                    "target": 0
                }, {
                    "source": 0,
                    "target": 4
                }
            ]
        },
        topologyData3 : {}
    }
  },
  filters: {
  },
  created () {
  },
  mounted () { 
    var Line = nx.geometry.Line;
    var Vector = nx.geometry.Vector;
    for (var i = 0; i < this.topologyData2.nodes.length; i++) {
        let flag = JSON.stringify(this.topologyData.nodes).indexOf(JSON.stringify(this.topologyData2.nodes[i]))
        if(flag ==  -1){
            this.topologyData.nodes.push(this.topologyData2.nodes[i])
        }
    }
    for (var i = 0; i < this.topologyData2.links.length; i++) {
        this.topologyData2.links[i].linked = true
        this.topologyData.links.push(this.topologyData2.links[i])
    }
    console.log(this.topologyData.links)
    // extend link class
    nx.define('MyExtendLink', nx.graphic.Topology.Link, {
        methods: {
            update: function () {
                var _offset = this.getOffset();
                var offset = new Vector(0, _offset);
                var stageScale = this.stageScale();
                var width = (this._width || 1) * (this._stageScale || 1);
                var line = this.reverse() ? this.line().negate() : this.line();

                var lineEl = this.view('line');
                var pathEL = this.view('path');
                var newLine = line.translate(offset).pad(22 * stageScale, 32 * stageScale);
                lineEl.sets({
                    x1: newLine.start.x,
                    y1: newLine.start.y,
                    x2: newLine.end.x,
                    y2: newLine.end.y
                });
                pathEL.setStyle('display', 'none');
                lineEl.setStyle('display', 'block');
                lineEl.setStyle('stroke-width', width);
                if(this.model()._data.linked){
                    lineEl.setStyle('stroke-dasharray', "2,5");
                }
                
                lineEl.setStyle('marker-end', 'url(#markerArrow)');
            }
        }
    });


    var topo = new nx.graphic.Topology({
        adaptive: true,
        nodeConfig: {
            label: 'model.name'
        },
        nodeSetConfig: {
            label: 'model.name'
        },
        linkConfig: {
            linkType: 'parallel'
        },
        showIcon: true,
        linkInstanceClass: 'MyExtendLink' // set the link class
    });


    //define an arrow
    var arrow = "<defs xmlns='http://www.w3.org/2000/svg'><marker id='markerArrow' viewBox='0 0 10 10' refX='0' refY='5' markerUnits='strokeWidth' markerWidth='10' markerHeight='10' orient='auto'> <path d='M 0 0 L 10 5 L 0 10 z'  style='fill: #0386d2;'/></marker></defs>";
    topo.stage().addDefString(arrow);
    topo.data(this.topologyData);
    //app
    var app = new nx.ui.Application();
    topo.attach(app);
  },

  methods: {
    
  }
}
</script>
<style lang="less" scoped>
html, body, section {
    overflow: hidden;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:#000;
}

</style>
