<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender"
  />
</template>
<script>
import VueHighcharts from "vue3-highcharts";

export default {
  name: "Dashboard",
  components: {
    VueHighcharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "line",
        },
        title: {
          text: "Ingresos relacionados a Internet",
        },
        xAxis: {
          categories: ["Enero"],
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        series: [
          {
            name: "Meses",
            data: [0],
          },
        ],
      },
    };
  },
  created() {
    console.log('created')
  },
};
</script>
