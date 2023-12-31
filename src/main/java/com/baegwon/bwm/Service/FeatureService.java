package com.baegwon.bwm.Service;

import com.baegwon.bwm.Repository.FeatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FeatureService {

    @Autowired
    private FeatureRepository featureRepository;

    @Transactional(readOnly = true)
    public List<String> getFeatureDetail(Long product_id) {
        return featureRepository.findFeatureByProductId(product_id);
    }
}
