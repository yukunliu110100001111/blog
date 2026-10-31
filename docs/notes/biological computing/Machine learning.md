K-means: randomly initialize clusters(generate K centre in the data)
assign data points to nearest clusters. -> each one centers get a color
recalculate cluster centers to the means of it's data points
repeat until no new assign happens.
Fuzzy k-means: k-means plus every point can have a percentage of assign. involving gaussian distribution can make the model solve some important difference. The idea is to find out the maximum posterior probability that can generate this point distribution. maximize P(data|model)
Fuzzy k -> expectation maximization(EM) + Gaussian Mixture Models(GMM) can discover the underlying probabilistic structure of data beyond the simpler clustering method(k-means)
Hierarchical clustering:
Choosing K can be a huge problem. so instead of choosing k in prior, using hierarchical clustering can merge the nearer data points together and merge, eventually form a tree grouped by length. Finally cut the tree, by choosing different cut level we can create disjoint cluster.(Unweighted Pair Group Method with Arithmetic-mean -> UPGMA)
Bayes approach can be used to the p