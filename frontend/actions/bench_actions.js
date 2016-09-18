const BenchActions = {
    REQUEST_BENCHES: "REQUEST_BENCHES",
    RECEIVE_BENCHES: "RECEIVE_BENCHES",
    CREATE_BENCH: "CREATE_BENCH",
    REQUEST_BENCH: "REQUEST_BENCH",
    RECEIVE_BENCH: "RECEIVE_BENCH",

    requestBenches: () => ({
      type: BenchActions.REQUEST_BENCHES
    }),
    receiveBenches: (benches) => ({
      type: BenchActions.RECEIVE_BENCHES,
      benches
    }),
    createBench: (bench) => ({
      type: BenchActions.CREATE_BENCH,
      bench
    }),
    requestBench: (id) => ({
      type: BenchActions.REQUEST_BENCH,
      id
    }),
    receiveBench: (bench) => ({
      type: BenchActions.RECEIVE_BENCH,
      bench
    })
  };

export default BenchActions;
