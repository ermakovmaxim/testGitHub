package com.app.server.service.organization.contactmanagement;
import com.app.config.annotation.Complexity;
import com.app.config.annotation.SourceCodeAuthorClass;
import com.athena.server.pluggable.utils.bean.ResponseBean;
import org.springframework.http.HttpEntity;
import com.app.bean.PaginationBean;
import com.app.shared.organization.contactmanagement.Gender;
import java.util.List;
import com.athena.server.pluggable.utils.bean.FindByBean;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "3", comments = "Service for Gender Master table Entity", complexity = Complexity.LOW)
public abstract class GenderService {

    abstract HttpEntity<ResponseBean> findAll() throws Exception;

    abstract HttpEntity<ResponseBean> findPageWiseData(PaginationBean paginationBean) throws Exception;

    abstract HttpEntity<ResponseBean> save(Gender entity) throws Exception;

    abstract HttpEntity<ResponseBean> save(List<Gender> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> delete(String id) throws Exception;

    abstract HttpEntity<ResponseBean> update(Gender entity) throws Exception;

    abstract HttpEntity<ResponseBean> update(List<Gender> entity, boolean isArray) throws Exception;

    abstract HttpEntity<ResponseBean> findById(FindByBean findByBean) throws Exception;
}
