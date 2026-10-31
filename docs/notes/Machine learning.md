types: 
	supervised learning (prelabeled)
	unsupervised learning(unprelabed)
	reinforce learning(interactivly learning)

features:
	qualitative data: 
		nominal: no order can't be labeled in number, better with vetor and a one-hot encoding, which label them use vector like \[0,1,0,0]
		ordinal: ordered
	quantitative:
		continuous 
		discrete

for supervised output: 
classification: binary/multiclass
regression: a longer trend of the data like full image or stake price

dataset: 
training: use to train the data
validate: in or after training to make test whether it can handle unseen data
test: final check, how generalizable is the model

loss: difference between output and answer, loss decrease with prediction better
L1 loss: sum(|y_real - y_predicted|)
L2 loss:sum((y_real - y_predicted)^2)

accurary: predict right/predict

machine learning method:
k-nearest neighbour: point is similar to k-point close to it, it take euclidian length to measure.  take k numbers of point  and find the number of the label, which determine the label of the point
